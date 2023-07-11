import { DbHelperModule } from '@app/common/dbhelper';
import { Module } from '@nestjs/common';
import { OrgsModule } from '../orgs/orgs.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [
        OrgsModule,
        DbHelperModule
    ],
    controllers: [
        UsersController
    ],
    providers: [
        UsersService,
    ],
    exports: [
        UsersService
    ],
})
export class UsersModule { }
