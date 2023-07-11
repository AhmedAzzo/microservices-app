

import { Injectable } from '@nestjs/common';
import { BaseFactory } from '@app/common/base/Base.factory';
import { ActionsRepository, WorkflowRepository } from '@app/common/dbhelper';


@Injectable()
export class WorkflowService extends BaseFactory {
    constructor(
        private readonly workflowRepository: WorkflowRepository,
        private readonly actionsRepository: ActionsRepository
    ) {
        super(workflowRepository)
    }
}
