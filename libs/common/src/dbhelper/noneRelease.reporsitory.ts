import { AbstractRepository, NoneRelease } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class NoneReleaseRepository extends AbstractRepository<NoneRelease> {
  protected readonly logger = new Logger(NoneRelease.name);
  constructor(
    @InjectModel(NoneRelease.name) NoneReleaseModel: Model<NoneRelease>,
    @InjectConnection() connection: Connection,
  ) {
    super(NoneReleaseModel, connection);
  }
}
