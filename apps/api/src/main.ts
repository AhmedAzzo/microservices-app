import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { Logger as NestLogger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from '@app/common/swagger';
import * as bodyParser from 'body-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
  app.use(cookieParser());
  app.use(bodyParser.json({ limit: '10mb' }));
  SwaggerModule.setup('docs', app, createDocument(app));
  const configService = app.get(ConfigService);
  NestLogger.log(
    `TUV-API APP IS Listening on port ${configService.get('PORT')}`,
  );
  await app.listen(configService.get('PORT'));
}
bootstrap();
