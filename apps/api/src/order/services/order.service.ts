import {
  IFindOptions,
  Order,
  IMeta,
  ModulesCodes,
  ModulesSettings,
  ORDER_SERVICE,
} from '@app/common';
import {
  CreateOrderDto,
  StatusDto,
  UpdateOrderDto,
} from '@app/common/dto/order-dtos';
import { OrderRepository } from '@app/common/dbhelper';
import { Inject, Injectable } from '@nestjs/common';
import { FilterQuery } from 'mongoose';

import { OrgsService } from '../../orgs/org.service';
import { ClientProxy } from '@nestjs/microservices';
import { EventBus } from '@nestjs/cqrs';
import { ChangeOrderStatusEvent } from '../../events-handlers/events/order/change-order-status-event';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orgsService: OrgsService,
    @Inject(ORDER_SERVICE) private readonly orderClient: ClientProxy,
    private readonly eventBus: EventBus,
  ) {}

  async create(createOrderDto: CreateOrderDto, meta: IMeta) {
    const id = await this.orgsService.generateSequenceNumber(
      meta.orgInfo.code,
      ModulesCodes.order,
      ModulesSettings.orderSettings,
    );

    const res = await this.orderRepository.create({
      ...createOrderDto,
      id,
      meta,
      status: 'draft',
    });
    this.eventBus.publish(
      new ChangeOrderStatusEvent({
        _id: res._id.toHexString(),
        status: 'draft',
        action: 'create',
      }),
    );

    return res;
  }
  async update(_id: string, updateOrderDto: UpdateOrderDto, meta: IMeta) {
    return this.orderRepository.updateMany(
      { _id },
      { ...updateOrderDto, meta },
    );
  }
  // handle pagination later
  async getAll(filterQuery: FilterQuery<Order>, options?: IFindOptions) {
    return this.orderRepository.find(filterQuery, options);
  }
  async getOne(_id: string) {
    return this.orderRepository.findOne({ _id });
  }
  async delete(_id: string) {
    return this.orderRepository.findOneAndDelete({ _id });
  }
  async status(_id: string, status: StatusDto) {
    const order = await this.orderRepository.findOne({ _id });

    if (!order) {
      throw new Error('Order not found');
    }

    switch (order.status) {
      case 'draft': {
        await this.orderRepository.findOneAndUpdate({ _id }, { status });
        this.eventBus.publish(
          new ChangeOrderStatusEvent({ _id, status, action: 'update' }),
        );
      }
      case 'partial-approved': {
        if (status === 'draft') {
          throw new Error('Order status cannot return to draft');
        }
        await this.orderRepository.findOneAndUpdate({ _id }, { status });
        this.eventBus.publish(
          new ChangeOrderStatusEvent({ _id, status, action: 'update' }),
        );
      }
      case 'approved':
      case 'rejected': {
        if (status === 'draft') {
          throw new Error(
            'Order status cannot change status for approved or rejected !',
          );
        }
      }
    }
  }
}
