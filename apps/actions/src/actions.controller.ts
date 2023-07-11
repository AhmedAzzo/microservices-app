import { RmqService } from '@app/common';
import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { ActionsService } from './actions.service';

@Controller()
export class ActionsController {
  constructor(
    private readonly actionsService: ActionsService,
    private readonly rmqService: RmqService,
  ) { }

  @EventPattern('actionsClient')
  async test(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('hello recieving actions', data);

    this.rmqService.ack(context);
  }

  @EventPattern('add_order')
  async AddOrder(@Payload() data: any, @Ctx() context: RmqContext) {
    // console.log('hello recieving actions', data);

    // this.rmqService.ack(context);
  }
}
