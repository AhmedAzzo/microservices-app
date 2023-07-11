import { RmqService } from '@app/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ActionsModule } from './actions.module';
import { Logger } from 'nestjs-pino';
import { Logger as NestLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ActionsModule);
  app.useLogger(app.get(Logger));
  const rmqService = app.get<RmqService>(RmqService);
  const configService = app.get(ConfigService);
  app.connectMicroservice(rmqService.getOptions(configService.get('RABBIT_MQ_QUEUE_ACTIONS')));
  await app.startAllMicroservices();
  NestLogger.log(
    `Actions Microservice is up an running`,
  );
}
bootstrap();
