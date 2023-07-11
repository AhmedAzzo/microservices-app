import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { CreateWorkspaceDto, CurrentUser, IBaseQueryParams, Role, Roles, SystemRoles, User } from '@app/common';
import { getMeta } from '@app/common/utils/api.utils';
import { WorkspaceService } from '../services/workspace.service';
import { JwtAuthGuard } from '@app/common/auth';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('workspaces')
@ApiTags('Workspaces')
@ApiBearerAuth()
export class WorkspacesController {
    constructor(private readonly workspaceService: WorkspaceService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    async createUser(@CurrentUser() user: User, @Body() createWorkspaceDto: CreateWorkspaceDto) {
        const meta = getMeta(user.meta, user.id);
        const newWorkspace = this.workspaceService.create(createWorkspaceDto, meta);
        return newWorkspace;
    }
    @Get('/all')
    @UseGuards(JwtAuthGuard)
    @Roles(SystemRoles.workspaces_manager)
    async getWorkspaces(@CurrentUser() user: User, @Query() queryParams: IBaseQueryParams) {
        const workspaces = this.workspaceService.getAllWorkspaces(user, queryParams);
        return workspaces;
    }
}
