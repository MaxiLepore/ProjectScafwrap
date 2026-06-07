import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { logger } from '@/lib/logger';

// Contact form validation schema
const contactSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email cannot exceed 100 characters'),
  phone: z.string()
    .optional()
    .refine((val) => !val || /^[\+]?[0-9\s\-\(\)]{7,20}$/.test(val), 'Please enter a valid phone number'),
  company: z.string()
    .max(100, 'Company name cannot exceed 100 characters')
    .optional(),
  subject: z.string()
    .min(1, 'Subject is required')
    .min(5, 'Subject must be at least 5 characters long')
    .max(100, 'Subject cannot exceed 100 characters'),
  message: z.string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'Message cannot exceed 1000 characters'),
});

// Rate limiting simple, en memoria.
// NOTA: este store es por-instancia y NO es autoritativo en entornos
// serverless (cada invocación puede ser otra instancia). El limiting
// durable entre instancias (Vercel KV / Upstash) queda como follow-up.
const submissions = new Map<string, { count: number; lastSubmission: number }>();
const RATE_LIMIT = 5; // máximo 5 envíos por IP
const WINDOW_MS = 60 * 60 * 1000; // 1 hora

function getRateLimitKey(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';
  return ip;
}

// Elimina entradas expiradas para que el Map no crezca sin límite.
function pruneExpired(now: number): void {
  for (const [key, value] of submissions) {
    if (now - value.lastSubmission > WINDOW_MS) {
      submissions.delete(key);
    }
  }
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  pruneExpired(now);
  const userSubmissions = submissions.get(key);

  if (!userSubmissions) {
    submissions.set(key, { count: 1, lastSubmission: now });
    return false;
  }

  if (now - userSubmissions.lastSubmission > WINDOW_MS) {
    // Reset window
    submissions.set(key, { count: 1, lastSubmission: now });
    return false;
  }

  if (userSubmissions.count >= RATE_LIMIT) {
    return true;
  }

  userSubmissions.count++;
  userSubmissions.lastSubmission = now;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request);
    if (isRateLimited(rateLimitKey)) {
      logger.warn('Contact form rate limit exceeded', { key: rateLimitKey });
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    // Parsear el body — JSON malformado es un error del cliente (400),
    // no un error del servidor (500).
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid request', message: 'Request body must be valid JSON.' },
        { status: 400 }
      );
    }

    // Honeypot anti-bot: campo oculto que los humanos nunca rellenan. Si llega
    // con contenido, es un bot → devolvemos un 200 "falso" sin procesar, para
    // no revelar la detección, y lo dejamos registrado.
    if (
      body !== null && typeof body === 'object' &&
      typeof (body as Record<string, unknown>).website === 'string' &&
      (body as Record<string, unknown>).website !== ''
    ) {
      logger.warn('Contact form honeypot triggered', { key: rateLimitKey });
      return NextResponse.json({ success: true, message: 'Form validated successfully' });
    }

    // Validar el body
    const validatedData = contactSchema.parse(body);

    // Sanitizar datos
    const sanitizedData = {
      name: validatedData.name.trim(),
      email: validatedData.email.toLowerCase().trim(),
      phone: validatedData.phone?.trim() || '',
      company: validatedData.company?.trim() || '',
      subject: validatedData.subject.trim(),
      message: validatedData.message.trim(),
    };

    // El envío del email lo realiza el cliente vía EmailJS. Esta ruta solo
    // valida la entrada y aplica rate limiting.
    return NextResponse.json({
      success: true,
      message: 'Form validated successfully',
      data: sanitizedData,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = error.issues.reduce((acc, issue) => {
        const field = issue.path[0] as string;
        acc[field] = issue.message;
        return acc;
      }, {} as Record<string, string>);

      return NextResponse.json(
        {
          error: 'Validation failed',
          message: 'Please check the form fields and try again',
          fieldErrors: formattedErrors
        },
        { status: 400 }
      );
    }

    logger.error('Contact form error', { error: error instanceof Error ? error.message : String(error) });
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'Something went wrong. Please try again later.'
      },
      { status: 500 }
    );
  }
}
