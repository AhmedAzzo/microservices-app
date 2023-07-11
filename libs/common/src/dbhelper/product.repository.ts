import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository, Product } from '@app/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class ProductRepository extends AbstractRepository<Product> {
  protected readonly logger = new Logger(ProductRepository.name);
  constructor(
    @InjectModel(Product.name) ProductModel: Model<Product>,
    @InjectConnection() connection: Connection) {
    super(ProductModel, connection);
  }
}
