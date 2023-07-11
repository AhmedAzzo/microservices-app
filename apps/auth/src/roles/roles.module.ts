import { DatabaseModule, Role, RoleSchema } from '@app/common';
import { DbHelperModule } from '@app/common/dbhelper';
import { Module } from '@nestjs/common';

import { RolesService } from './roles.service';



@Module({
    imports: [
        DbHelperModule
    ],
    controllers: [],
    providers: [
        RolesService
    ],
    exports: [RolesService],
})
export class RolesModule { }
