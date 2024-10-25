import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Bộ điều khiển cơ bản với một tuyến đường duy nhất.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
