import { Module } from '@nestjs/common';
import { NoneReleaseController } from './controllers/noneRelease.controller';
import { NoneReleaseService } from './services/nonerelease.service';
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
  controllers: [NoneReleaseController],
  providers: [NoneReleaseService]
})
export class NoneReleaseModule { }
