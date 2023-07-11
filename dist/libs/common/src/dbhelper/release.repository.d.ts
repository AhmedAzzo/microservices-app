import { AbstractRepository, Release } from '@app/common';
import { Logger } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
export declare class ReleaseRepository extends AbstractRepository<Release> {
    protected readonly logger: Logger;
    constructor(ReleaseModel: Model<Release>, connection: Connection);
}
