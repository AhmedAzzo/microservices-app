import { AUTH_SERVICE } from '@app/common';
import { DbHelperModule } from '@app/common/dbhelper';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrgsModule } from '../orgs/orgs.module';


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
    controllers: [],
    providers: [

    ],
    exports: [],
})
export class WorkflowModule { }
