import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { formatDate } from '@w-flow/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const now = new Date();
    return `${this.appService.getHello()} - Shared Time: ${formatDate(now)}`;
  }
}
