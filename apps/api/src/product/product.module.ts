import { Module } from '@nestjs/common';
import { ProductController } from './controlers/product.controller';
import { ProductService } from './services/product.service';
import { AUTH_SERVICE } from '@app/common';
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
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
