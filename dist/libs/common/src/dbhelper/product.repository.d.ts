import { Logger } from '@nestjs/common';
import { AbstractRepository, Product } from '@app/common';
import { Connection, Model } from 'mongoose';
export declare class ProductRepository extends AbstractRepository<Product> {
    protected readonly logger: Logger;
    constructor(ProductModel: Model<Product>, connection: Connection);
}
