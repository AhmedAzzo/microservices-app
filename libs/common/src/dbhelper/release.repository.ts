import { AbstractRepository, Release } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class ReleaseRepository extends AbstractRepository<Release> {
  protected readonly logger = new Logger(Release.name);
  constructor(
    @InjectModel(Release.name) ReleaseModel: Model<Release>,
    @InjectConnection() connection: Connection,
  ) {
    super(ReleaseModel, connection);
  }
}
