import { Logger } from '@nestjs/common';
import { AbstractRepository, Role } from '@app/common';
import { Connection, Model } from 'mongoose';
export declare class RolesRepository extends AbstractRepository<Role> {
    protected readonly logger: Logger;
    constructor(rolesModel: Model<Role>, connection: Connection);
}
