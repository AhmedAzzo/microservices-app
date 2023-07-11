import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AuthModule } from './auth.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { Logger as NestLogger } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from '@app/common/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: configService.get('TCP_PORT'),
    },
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
  await app.startAllMicroservices();
  SwaggerModule.setup('docs', app, createDocument(app));
  NestLogger.log(`AUTH APP IS Listening on port ${configService.get('HTTP_PORT')}`);
  await app.listen(configService.get('HTTP_PORT'));
}
bootstrap();
