import { Logger } from '@nestjs/common';
import { AbstractRepository, Category } from '@app/common';
import { Connection, Model } from 'mongoose';
export declare class CategoryRepository extends AbstractRepository<Category> {
    protected readonly logger: Logger;
    constructor(categoryModel: Model<Category>, connection: Connection);
}
