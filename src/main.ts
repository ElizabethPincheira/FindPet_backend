import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validaciones globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Serialización
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector)),
  );

  // CORS (CLAVE para Render + Front)
  app.enableCors({
    origin: [
      'http://localhost:4200',
      'https://findpet-frontend.onrender.com',
    ],
    credentials: true,
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);

  
}

bootstrap();
