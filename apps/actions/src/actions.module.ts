import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ActionsController } from './actions.controller';
import { ActionsService } from './actions.service';
import * as Joi from 'joi';
import { DatabaseModule, RmqModule, } from '@app/common';
import { LoggerModule } from '@app/common';
import { DbHelperModule } from '@app/common/dbhelper';
import { WorkflowService } from './workflow.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_QUEUE_ACTIONS: Joi.string().required(),
      }),
      envFilePath: './apps/actions/.env',
    }),
    DatabaseModule,
    LoggerModule,
    RmqModule,
    DbHelperModule
  ],
  controllers: [ActionsController],
  providers: [ActionsService, WorkflowService],
})
export class ActionsModule { }
