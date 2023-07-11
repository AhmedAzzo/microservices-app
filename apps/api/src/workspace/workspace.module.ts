import { ACTIONS_SERVICE, AUTH_SERVICE, NOTIFICATIONS_SERVICE, RmqModule } from '@app/common';
import { DbHelperModule } from '@app/common/dbhelper';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrgsModule } from '../orgs/orgs.module';
import { WorkspacesController } from './controllers/workspace.controller';
import { WorkspaceService } from './services/workspace.service';



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
        RmqModule.register({
            name: ACTIONS_SERVICE,
        }),
        RmqModule.register({
            name: NOTIFICATIONS_SERVICE,
        }),
        CqrsModule,
        DbHelperModule
    ],
    controllers: [WorkspacesController],
    providers: [
        WorkspaceService
    ],
    exports: [WorkspaceService],
})
export class WorkspaceModule { }
