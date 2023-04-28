// src/main.ts
import { AppModule } from '@/app/app.module';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Nest Js Boilerplate')
    .setDescription('The Nest Js Boilerplate API description')
    .setVersion('1.0')
    .addTag('Nest Js Boilerplate')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
