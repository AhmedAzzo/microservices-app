import { Logger } from '@nestjs/common';
import { AbstractRepository, Action } from '@app/common';
import { Connection, Model } from 'mongoose';
export declare class ActionsRepository extends AbstractRepository<Action> {
    protected readonly logger: Logger;
    constructor(actionModel: Model<Action>, connection: Connection);
}
