import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository, Org } from '@app/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class OrgsRepository extends AbstractRepository<Org> {
    protected readonly logger = new Logger(OrgsRepository.name);
    constructor(
        @InjectModel(Org.name) orgModel: Model<Org>,
        @InjectConnection() connection: Connection) {
        super(orgModel, connection);
    }
}
