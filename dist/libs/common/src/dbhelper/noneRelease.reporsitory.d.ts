import { AbstractRepository, NoneRelease } from '@app/common';
import { Logger } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
export declare class NoneReleaseRepository extends AbstractRepository<NoneRelease> {
    protected readonly logger: Logger;
    constructor(NoneReleaseModel: Model<NoneRelease>, connection: Connection);
}
