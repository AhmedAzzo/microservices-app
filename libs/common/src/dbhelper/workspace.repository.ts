import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository, Workspace } from '@app/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class WorkspaceRepository extends AbstractRepository<Workspace> {
    protected readonly logger = new Logger(WorkspaceRepository.name);
    constructor(
        @InjectModel(Workspace.name) workspaceModel: Model<Workspace>,
        @InjectConnection() connection: Connection,
    ) {
        super(workspaceModel, connection);
    }
}
