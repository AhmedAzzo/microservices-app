import { AbstractRepository, SubCategory } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class SubCategoryRepository extends AbstractRepository<SubCategory> {
  protected readonly logger = new Logger(SubCategoryRepository.name);
  constructor(
    @InjectModel(SubCategory.name) subCategoryModel: Model<SubCategory>,
    @InjectConnection() connection: Connection,
  ) {
    super(subCategoryModel, connection);
  }
}
