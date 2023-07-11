import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository, Action } from '@app/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class ActionsRepository extends AbstractRepository<Action> {
  protected readonly logger = new Logger(ActionsRepository.name);
  constructor(
    @InjectModel(Action.name) actionModel: Model<Action>,
    @InjectConnection() connection: Connection,
  ) {
    super(actionModel, connection);
  }
}
