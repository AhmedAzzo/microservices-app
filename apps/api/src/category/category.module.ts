import {
  AUTH_SERVICE,
} from '@app/common';
import { Module } from '@nestjs/common';

import { CategoryController } from './controllers/category.controller';

import { SubCategoryController } from './controllers/sub-catregory.controller';
import { CategoryService } from './services/category.service';
import { SubCategoryService } from './services/sub-catregory.service';
import { OrgsModule } from '../orgs/orgs.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { DbHelperModule } from '@app/common/dbhelper';

@Module({
  imports: [
    OrgsModule,
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('AUTH_HOST'),
            port: configService.get('AUTH_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
    DbHelperModule
  ],
  controllers: [CategoryController, SubCategoryController],
  providers: [
    CategoryService,
    SubCategoryService,
  ],
  exports: [CategoryService, SubCategoryService,],
})
export class CategoryModule { }
