import { NOTIFICATIONS_SERVICE, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { LoggerModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_QUEUE_NOTIFICATIONS: Joi.string().required(),
      }),
      envFilePath: './apps/notifications/.env',
    }),
    LoggerModule,
    RmqModule,
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule { }
