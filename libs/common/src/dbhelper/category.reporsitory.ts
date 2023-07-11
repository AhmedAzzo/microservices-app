import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository, Category } from '@app/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class CategoryRepository extends AbstractRepository<Category> {
    protected readonly logger = new Logger(CategoryRepository.name);
    constructor(
        @InjectModel(Category.name) categoryModel: Model<Category>,
        @InjectConnection() connection: Connection,
    ) {
        super(categoryModel, connection);
    }
}
