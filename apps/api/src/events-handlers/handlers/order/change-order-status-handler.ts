import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { ChangeOrderStatusEvent } from '../../events/order/change-order-status-event';
import { OrderRepository } from '@app/common/dbhelper';

@EventsHandler(ChangeOrderStatusEvent)
export class ChangeOrderStatusHandler
  implements IEventHandler<ChangeOrderStatusEvent>
{
  constructor(
    // @Inject(ORDER_SERVICE) private readonly notificationsClient: ClientProxy,
    private readonly orderRepo: OrderRepository,
  ) {}

  @EventPattern('order_status_changed')
  async handle(event: ChangeOrderStatusEvent) {
    const {
      data: { _id, status },
    } = event;

    this.orderRepo.findOneAndUpdate({ _id }, { status });
  }
}
