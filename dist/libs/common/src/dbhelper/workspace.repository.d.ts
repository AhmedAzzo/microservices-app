import { Logger } from '@nestjs/common';
import { AbstractRepository, Workspace } from '@app/common';
import { Connection, Model } from 'mongoose';
export declare class WorkspaceRepository extends AbstractRepository<Workspace> {
    protected readonly logger: Logger;
    constructor(workspaceModel: Model<Workspace>, connection: Connection);
}
