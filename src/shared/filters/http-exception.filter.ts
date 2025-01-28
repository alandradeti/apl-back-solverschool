import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { QueryFailedError } from 'typeorm'; // Caso esteja usando TypeORM para interação com o banco

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const httpArgumentsHost = host.switchToHttp();

    let httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Erro interno do servidor';
    let responseBody: any = {};

    // Tratar erros do tipo HTTPException
    if (exception instanceof HttpException) {
      httpStatus = exception.getStatus();
      message = this.getErrorMessage(exception);
      responseBody = this.createErrorResponse(httpStatus, message);
    }
    // Tratar erros de validação de dados (exemplo com class-validator)
    else if (
      exception instanceof Error &&
      exception.message.includes('validation failed')
    ) {
      httpStatus = HttpStatus.BAD_REQUEST;
      message = 'Erro de validação de dados: ' + exception.message;
      responseBody = this.createErrorResponse(httpStatus, message);
    }
    // Tratar erros de violação de chave única (TypeORM ou outros ORMs)
    else if (exception instanceof QueryFailedError) {
      httpStatus = HttpStatus.CONFLICT;
      message = this.getQueryErrorMessage(exception);
      responseBody = this.createErrorResponse(httpStatus, message);
    }
    // Tratar erros de permissão ou acesso negado
    else if (
      exception instanceof Error &&
      exception.message.includes('forbidden')
    ) {
      httpStatus = HttpStatus.FORBIDDEN;
      message = 'Acesso negado: ' + exception.message;
      responseBody = this.createErrorResponse(httpStatus, message);
    }
    // Tratar erro 404 Not Found
    else if (
      exception instanceof Error &&
      exception.message.includes('not found')
    ) {
      httpStatus = HttpStatus.NOT_FOUND;
      message = 'Recurso não encontrado: ' + exception.message;
      responseBody = this.createErrorResponse(httpStatus, message);
    }
    // Caso contrário, tratar como erro genérico
    else {
      console.error('Exception:', exception); // Log de exceções desconhecidas
      message = 'Erro inesperado';
      responseBody = this.createErrorResponse(httpStatus, message);
    }

    httpAdapter.reply(
      httpArgumentsHost.getResponse(),
      responseBody,
      httpStatus,
    );
  }

  private createErrorResponse(statusCode: number, message: string) {
    return {
      statusCode,
      timestamp: new Date().toISOString(),
      message,
    };
  }

  private getErrorMessage(exception: HttpException): string {
    const response = exception.getResponse();
    // Caso o `response` seja um objeto, podemos pegar a mensagem diretamente
    if (
      typeof response === 'object' &&
      response !== null &&
      'message' in response
    ) {
      return (response as any).message || 'Erro desconhecido';
    }
    // Caso contrário, retornamos a resposta padrão
    return 'Erro desconhecido';
  }

  private getQueryErrorMessage(exception: QueryFailedError): string {
    // Verificar a mensagem do erro
    const errorMessage =
      exception.message || 'Erro ao executar consulta no banco de dados';
    // Algumas mensagens podem conter o código do erro SQL, que podemos extrair manualmente
    if (exception.message.includes('duplicate key value')) {
      return 'Conflito de dados: chave duplicada';
    }
    return errorMessage; // Caso contrário, retornamos a mensagem original
  }
}
