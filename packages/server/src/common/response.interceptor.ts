import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const requestId = req.headers['x-request-id'] || '';
    return next.handle().pipe(
      map((data) => ({
        code: 0,
        message: 'OK',
        data,
        timestamp: new Date().toISOString(),
        requestId,
      })),
    );
  }
}
