import { AbstractRepository, SubCategory } from '@app/common';
import { Logger } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
export declare class SubCategoryRepository extends AbstractRepository<SubCategory> {
    protected readonly logger: Logger;
    constructor(subCategoryModel: Model<SubCategory>, connection: Connection);
}
