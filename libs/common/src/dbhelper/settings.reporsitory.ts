import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository, Settings } from '@app/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class SettingsRepository extends AbstractRepository<Settings> {
    protected readonly logger = new Logger(SettingsRepository.name);
    constructor(
        @InjectModel(Settings.name) SettingsModel: Model<Settings>,
        @InjectConnection() connection: Connection) {
        super(SettingsModel, connection);
    }
}
