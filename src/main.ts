import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Tệp nhập của ứng dụng sử dụng hàm cốt lõi NestFactory để tạo phiên bản ứng dụng Nest.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
