import {
  HealthModule,
} from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from '@app/common';
import * as Joi from 'joi';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { SettingsModule } from './settings/settings.module';
import { OrgsModule } from './orgs/orgs.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { WorkflowModule } from './workflow/workflow.module';
import { ReleaseModule } from './release/release.module';
import { NoneReleaseModule } from './nonerelease/nonerelease.module';
import { HandlersModule } from './events-handlers';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/tuv-api/.env',
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
        AUTH_HOST: Joi.string().required(),
        AUTH_PORT: Joi.number().required(),
      }),
    }),
    HealthModule,
    CategoryModule,
    ProductModule,
    OrderModule,
    SettingsModule,
    OrgsModule,
    WorkspaceModule,
    WorkflowModule,
    ReleaseModule,
    NoneReleaseModule,
    HandlersModule,
    ActionsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
