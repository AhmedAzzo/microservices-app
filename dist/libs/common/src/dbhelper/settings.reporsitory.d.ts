import { Logger } from '@nestjs/common';
import { AbstractRepository, Settings } from '@app/common';
import { Connection, Model } from 'mongoose';
export declare class SettingsRepository extends AbstractRepository<Settings> {
    protected readonly logger: Logger;
    constructor(SettingsModel: Model<Settings>, connection: Connection);
}
