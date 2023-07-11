
import {
  ACTIONS_SERVICE,
  AUTH_SERVICE,
  CreateWorkspaceDto,
  getUsersFromAuthMicroservice,
  IBaseQueryParams,
  IFindOptions,
  IMeta,
  IWorkspace,
  ModulesCodes,
  ModulesSettings,
  NOTIFICATIONS_SERVICE,
  User,
  Workspace,
  WorkspaceProjection
} from '@app/common';

import { BaseFactory } from '@app/common/base/Base.factory';
import { WorkspaceRepository } from '@app/common/dbhelper';

import {
  getFilterQuery,
  getPaginationQuery,
} from '@app/common/utils/api.utils';
import { Inject, Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { ObjectId } from 'mongodb';
import { FilterQuery } from 'mongoose';
import { AddWorkspaceEvent } from '../../events-handlers';
import { OrgsService } from '../../orgs/org.service';


@Injectable()
export class WorkspaceService extends BaseFactory {
  constructor(
    @Inject(AUTH_SERVICE) private readonly authClient: ClientProxy,
    // only for test, move to servvice and work with event handlers, event driven arch
    @Inject(NOTIFICATIONS_SERVICE) private readonly notificationsClient: ClientProxy,
    @Inject(ACTIONS_SERVICE) private readonly actionsClient: ClientProxy,
    private readonly workspaceRepository: WorkspaceRepository,
    private readonly orgsService: OrgsService,
    private readonly eventBus: EventBus,
  ) {
    super(workspaceRepository);
  }
  async create(createWorkspaceDto: CreateWorkspaceDto, meta: IMeta) {
    let id = await this.orgsService.generateSequenceNumber(meta.orgInfo.code, ModulesCodes.workspace, ModulesSettings.workspaceSettings);
    createWorkspaceDto.id = id;
    const workspace = this.workspaceRepository.create({
      ...createWorkspaceDto, meta: meta
    } as any);
    return workspace
  }
  async getAll(filterQuery: FilterQuery<Workspace>, options?: IFindOptions) {
    return this.workspaceRepository.find(filterQuery, options);
  }
  async getAllWorkspaces(user: User, queryParams: IBaseQueryParams) {
    const queryKeyMapper = { name: 'name' };
    const queryValueParser = {};
    const paginationQuery = getPaginationQuery(queryParams, queryKeyMapper);
    const query = {
      ...getFilterQuery(
        JSON.parse(queryParams.filter || '{}'),
        queryKeyMapper,
        queryValueParser,
      ),
      "meta.orgInfo.code": user.meta.orgInfo.code
    }
    const workspaces = await this.workspaceRepository.aggregate(query, { ...paginationQuery, project: { ...WorkspaceProjection } });
    const users_ids = workspaces[0]?.paginatedResults?.map(workspace => workspace.users).flat();
    users_ids?.map(id => new ObjectId(id))

    const usersMap = await getUsersFromAuthMicroservice(this.authClient, user, users_ids)
    workspaces[0].paginatedResults = workspaces[0]?.paginatedResults?.map((workspace: IWorkspace) => {
      return { ...workspace, users: workspace.users.map(user => usersMap[user]) }
    })
    // this line is only for testing line
    this.eventBus.publish(new AddWorkspaceEvent('ahmed'));
    return workspaces
  }
}
