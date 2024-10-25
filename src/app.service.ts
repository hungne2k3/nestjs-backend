import { Injectable } from '@nestjs/common';

// Một dịch vụ cơ bản với một phương pháp duy nhất.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
