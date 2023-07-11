import { AUTH_SERVICE } from '@app/common';
import { DbHelperModule } from '@app/common/dbhelper';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrgsService } from './org.service';

@Module({
    imports: [
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
    controllers: [],
    providers: [
        OrgsService
    ],
    exports: [OrgsService],
})
export class OrgsModule { }
