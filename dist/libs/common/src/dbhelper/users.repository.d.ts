import { Logger } from '@nestjs/common';
import { AbstractRepository, User } from '@app/common';
import { Connection, Model } from 'mongoose';
export declare class UsersRepository extends AbstractRepository<User> {
    protected readonly logger: Logger;
    constructor(userModel: Model<User>, connection: Connection);
}
