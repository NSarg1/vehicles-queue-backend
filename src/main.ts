import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // Convert params to proper types
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Set global prefix for all routes
  app.setGlobalPrefix('api/v1');
  // Enable CORS for all origins
  app.enableCors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow all standard HTTP methods
    allowedHeaders: '*', // Allow all headers
  });

  await app.listen(port);
}
bootstrap();
