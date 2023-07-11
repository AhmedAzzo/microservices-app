import {
  ACTIONS_SERVICE,
  NOTIFICATIONS_SERVICE,
  ORDER_SERVICE,
  RmqModule,
} from '@app/common';
import { DbHelperModule } from '@app/common/dbhelper';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AddWorkspaceHandler } from './workspaces';
import { ChangeOrderStatusHandler } from './order/change-order-status-handler';

@Module({
  imports: [
    CqrsModule,
    RmqModule.register({
      name: ACTIONS_SERVICE,
    }),
    RmqModule.register({
      name: NOTIFICATIONS_SERVICE,
    }),
    RmqModule.register({
      name: ORDER_SERVICE,
    }),
    DbHelperModule,
  ],
  providers: [AddWorkspaceHandler, ChangeOrderStatusHandler],
})
export class HandlersModule {}
