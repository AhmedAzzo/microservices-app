
import { DbHelperModule } from '@app/common/dbhelper';
import { Module } from '@nestjs/common';
import { OrgsService } from './org.service';

@Module({
    imports: [
        DbHelperModule
    ],
    controllers: [],
    providers: [
        OrgsService
    ],
    exports: [OrgsService],
})
export class OrgsModule { }
