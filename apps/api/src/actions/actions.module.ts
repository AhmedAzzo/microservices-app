import { Module } from '@nestjs/common';
import { ActionsController } from './actions.controller';
import { ActionsService } from './actions.service';
import { DbHelperModule } from '@app/common/dbhelper';

@Module({
  imports: [DbHelperModule],
  controllers: [ActionsController],
  providers: [ActionsService],
})
export class ActionsModule { }
