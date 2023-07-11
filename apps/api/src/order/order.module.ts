import { Module } from '@nestjs/common';
import { OrderController } from './controlers/order.controller';
import { OrderService } from './services/order.service';
import {
  ACTIONS_SERVICE,
  AUTH_SERVICE,
  DatabaseModule,
  NOTIFICATIONS_SERVICE,
  ORDER_SERVICE,
  Order,
  OrderSchema,
  RmqModule,
} from '@app/common';
import { OrgsModule } from '../orgs/orgs.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { DbHelperModule } from '@app/common/dbhelper';
import { HandlersModule } from '../events-handlers';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    DatabaseModule,
    // DatabaseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
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
    DbHelperModule,

    RmqModule.register({
      name: ORDER_SERVICE,
    }),
    RmqModule.register({
      name: ACTIONS_SERVICE,
    }),
    RmqModule.register({
      name: NOTIFICATIONS_SERVICE,
    }),

    CqrsModule,
    // HandlersModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
