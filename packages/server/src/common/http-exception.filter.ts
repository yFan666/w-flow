import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();

    const requestId = req.headers['x-request-id'] || '';
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const payload = exception.getResponse() as any;
      message =
        typeof payload === 'string' ? payload : (payload.message ?? message);
    }

    res.status(status).json({
      code: status,
      message,
      data: null,
      timestamp: new Date().toISOString(),
      requestId,
    });
  }
}
