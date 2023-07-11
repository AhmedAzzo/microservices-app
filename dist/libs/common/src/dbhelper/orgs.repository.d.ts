import { Logger } from '@nestjs/common';
import { AbstractRepository, Org } from '@app/common';
import { Connection, Model } from 'mongoose';
export declare class OrgsRepository extends AbstractRepository<Org> {
    protected readonly logger: Logger;
    constructor(orgModel: Model<Org>, connection: Connection);
}
