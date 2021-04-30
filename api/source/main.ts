import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  app.enableCors();
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
