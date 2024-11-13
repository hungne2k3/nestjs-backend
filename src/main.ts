import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  // cấu hình gợi ý code
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    // nếu trường không hợp lệ thì sex ném ra một cái bắt lỗi
    forbidNonWhitelisted: true
  }));

  // làm api/vi version phiên bản cho backend
  app.setGlobalPrefix('api/v1', { exclude: [''] });

  await app.listen(port);
}
bootstrap();
