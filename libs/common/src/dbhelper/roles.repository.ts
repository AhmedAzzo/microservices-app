import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository, Role } from '@app/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class RolesRepository extends AbstractRepository<Role> {
    protected readonly logger = new Logger(RolesRepository.name);
    constructor(
        @InjectModel(Role.name) rolesModel: Model<Role>,
        @InjectConnection() connection: Connection,
    ) {
        super(rolesModel, connection);
    }
}
