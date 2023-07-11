import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository, Workflow } from '@app/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class WorkflowRepository extends AbstractRepository<Workflow> {
    protected readonly logger = new Logger(WorkflowRepository.name);
    constructor(
        @InjectModel(Workflow.name) workflowModel: Model<Workflow>,
        @InjectConnection() connection: Connection,
    ) {
        super(workflowModel, connection);
    }
}
