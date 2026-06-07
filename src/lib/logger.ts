// src/lib/logger.ts
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
}

class Logger {
  private static instance: Logger;
  private isDevelopment: boolean;

  private constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private log(level: LogLevel, message: string, context?: Record<string, unknown>): void {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
    };

    if (this.isDevelopment) {
      const logMethod = console[level] || console.log;
      logMethod(`[${entry.timestamp}] ${level.toUpperCase()}: ${message}`, context || '');
      return;
    }

    // Producción: emitir error/warn como entradas estructuradas para que el
    // log drain del hosting (p. ej. Vercel) las capture, y reenviarlas al
    // webhook de logging si está configurado.
    if (level === 'error' || level === 'warn') {
      const sink = level === 'error' ? console.error : console.warn;
      sink(JSON.stringify(entry));
      this.sendToExternalService(entry);
    }
  }

  private sendToExternalService(entry: LogEntry): void {
    const url = process.env.LOG_WEBHOOK_URL;
    if (!url) return; // no-op documentado cuando no hay webhook configurado

    // Fire-and-forget: un fallo de logging nunca debe romper el request.
    void fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    }).catch(() => {
      /* swallow */
    });
  }

  public info(message: string, context?: Record<string, unknown>): void {
    this.log('info', message, context);
  }

  public warn(message: string, context?: Record<string, unknown>): void {
    this.log('warn', message, context);
  }

  public error(message: string, context?: Record<string, unknown>): void {
    this.log('error', message, context);
  }

  // Métodos específicos para métricas de performance
  public performanceMark(name: string): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name);
      this.log('debug', `Performance mark: ${name}`);
    }
  }

  public performanceMeasure(name: string, startMark: string, endMark: string): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        performance.measure(name, startMark, endMark);
        const measure = performance.getEntriesByName(name)[0] as PerformanceEntry | undefined;
        if (!measure) return;
        this.info(`Performance measure: ${name}`, {
          duration: measure.duration,
          startTime: measure.startTime,
        });
      } catch (error: unknown) {
        this.warn(`Failed to measure performance: ${name}`, { error });
      }
    }
  }
}

export const logger = Logger.getInstance();
