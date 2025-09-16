import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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

// Rate limiting simple (en producción usar Redis/DB)
const submissions = new Map<string, { count: number; lastSubmission: number }>();
const RATE_LIMIT = 5; // máximo 5 envíos por IP
const WINDOW_MS = 60 * 60 * 1000; // 1 hora

function getRateLimitKey(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
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
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    // Parsear y validar el body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    
    // Sanitizar datos (opcional - zod ya valida formato)
    const sanitizedData = {
      name: validatedData.name.trim(),
      email: validatedData.email.toLowerCase().trim(),
      phone: validatedData.phone?.trim() || '',
      company: validatedData.company?.trim() || '',
      subject: validatedData.subject.trim(),
      message: validatedData.message.trim(),
    };

    // En un ambiente real, aquí enviarías el email via API
    // Por ahora, devolvemos éxito para que el frontend maneje EmailJS
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form validated successfully',
      data: sanitizedData 
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
    
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    );
  }
}