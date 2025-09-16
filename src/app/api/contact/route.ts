import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema de validación para el formulario de contacto
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(50, 'El nombre no puede exceder 50 caracteres'),
  email: z.string().email('Email inválido').max(100, 'El email no puede exceder 100 caracteres'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres').max(100, 'El asunto no puede exceder 100 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(1000, 'El mensaje no puede exceder 1000 caracteres'),
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
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      );
    }
    
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}