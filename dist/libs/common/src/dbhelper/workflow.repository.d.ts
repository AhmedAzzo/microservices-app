import { Logger } from '@nestjs/common';
import { AbstractRepository, Workflow } from '@app/common';
import { Connection, Model } from 'mongoose';
export declare class WorkflowRepository extends AbstractRepository<Workflow> {
    protected readonly logger: Logger;
    constructor(workflowModel: Model<Workflow>, connection: Connection);
}
