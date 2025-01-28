import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MongoError } from 'mongodb';
import { Error as MongooseError } from 'mongoose';
const { ValidationError } = MongooseError;

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    // Tratar erros específicos do MongoDB
    if (exception instanceof MongoError) {
      switch (exception.code) {
        case 11000: // Duplicação de chave
          status = HttpStatus.CONFLICT;
          message =
            'Duplicated key error: A resource with the given identifier already exists.';
          break;
        default:
          message = `MongoDB Error: ${exception.message}`;
      }
    }
    // Tratar erros de validação do Mongoose
    else if (exception instanceof ValidationError) {
      status = HttpStatus.BAD_REQUEST;
      message = Object.values(exception.errors)
        .map((err: any) => err.message)
        .join('; ');
    }
    // Tratar erros HTTP personalizados
    else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const responseMessage = exception.getResponse();
      message =
        typeof responseMessage === 'string'
          ? responseMessage
          : (responseMessage as any).message || 'An error occurred';
    }
    // Outros erros
    else if (exception instanceof Error) {
      message = exception.message || message;
    }

    // Log do erro para depuração
    console.error({
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
      stack: exception.stack,
    });

    // Resposta ao cliente
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}
