import { Logger } from '@nestjs/common';
import { AbstractRepository, Order } from '@app/common';
import { Connection, Model } from 'mongoose';
export declare class OrderRepository extends AbstractRepository<Order> {
    protected readonly logger: Logger;
    constructor(OrderModel: Model<Order>, connection: Connection);
}
