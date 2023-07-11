import { Module } from '@nestjs/common';
import { ReleaseService } from './services/release.service';
import { ReleaseController } from './controllers/release.controller';
import {
  AUTH_SERVICE,
} from '@app/common';
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
  providers: [ReleaseService],
  controllers: [ReleaseController],
})
export class ReleaseModule { }
