import { RmqService } from '@app/common';
import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { NotificationsService } from './notifications.service';

@Controller()
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly rmqService: RmqService,
  ) { }

  @Get()
  getHello(): string {
    return this.notificationsService.getHello();
  }
  @EventPattern('workspaces_received')
  async test(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('hello recieving notifications', data);

    // await this.billingService.updateData(data);
    this.rmqService.ack(context);
  }
}
