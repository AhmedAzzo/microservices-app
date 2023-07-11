import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { UploaderModule } from './uploader.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { Logger as NestLogger } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from '@app/common/swagger';

async function bootstrap() {
  const app = await NestFactory.create(UploaderModule);
  const configService = app.get(ConfigService);

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
  SwaggerModule.setup('docs', app, createDocument(app));
  NestLogger.log(`Uploader APP IS Listening on port ${configService.get('HTTP_PORT')}`);
  await app.listen(configService.get('HTTP_PORT'));
}
bootstrap();
