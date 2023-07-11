import {
  CreateReleaseDto,
  CurrentUser,
  IBaseQueryParams,
  IdDto,
  Roles,
  SystemRoles,
  UpdateReleaseDto,
  User,
} from '@app/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ReleaseService } from '../services/release.service';
import {
  getFilterQuery,
  getMeta,
  getPaginationQuery,
} from '@app/common/utils/api.utils';
import { Types } from 'mongoose';
import { JwtAuthGuard } from '@app/common/auth';
import { BaseController } from '@app/common/base';

@Controller('release')
@ApiTags('Release')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Roles(SystemRoles.release_manager)
export class ReleaseController extends BaseController {
  constructor(private readonly releaseService: ReleaseService) {
    super();
  }

  @Get()
  async getReleases(@Query() queryParams: IBaseQueryParams) {
    const queryKeyMapper = {};
    const queryValueParser = {};
    const paginationQuery = getPaginationQuery(queryParams, queryKeyMapper);

    const query = getFilterQuery(
      JSON.parse(queryParams.filter || '{}'),
      queryKeyMapper,
      queryValueParser,
    );

    return this.formatResponse({
      message: '',
      paginationList: {
        ...paginationQuery,
        list: await this.releaseService.getAll(query, {
          ...paginationQuery,
        }),
      },
    });
  }
  @Get('/:id')
  async getRelease(@Param() { id }: IdDto) {
    const release = await this.releaseService.getOne(id);
    if (!release) return this.throwNotFoundError('Release not found');

    return this.formatResponse({
      message: '',
      data: await this.releaseService.getOne(id),
    });
  }
  @Post()
  async createRelease(
    @Body() createReleaseDto: CreateReleaseDto,
    @CurrentUser() user: User,
  ) {
    const meta = getMeta(user.meta, user.id);
    return this.formatResponse({
      message: 'Release created successfully',
      data: await this.releaseService.create(createReleaseDto, meta),
    });
  }
  @Put('/:id')
  async editCategory(
    @Param() { id }: IdDto,
    @Body() updateReleaseDto: UpdateReleaseDto,
    @CurrentUser() user: User,
  ) {
    const release = await this.releaseService.getOne(id);
    if (!release) return this.throwNotFoundError('Release not found');

    const meta = getMeta(user.meta, user.id);
    return this.releaseService.update(id, updateReleaseDto, meta);
  }
  @Put('/:id/:status/status')
  async editStatus(
    @Param() { id }: IdDto,
    @Param('status') status: string,
    @Body() updateReleaseDto: UpdateReleaseDto,
  ) {
    const release = await this.releaseService.getOne(id);
    if (!release) return this.throwNotFoundError('Release not found');

    // handle status later
    // return this.releaseService.status(id, status, updateReleaseDto);
  }
  @Delete('/:id')
  async deleteRelease(@Param() { id }: IdDto) {
    const release = await this.releaseService.getOne(id);
    if (!release) return this.throwNotFoundError('Release not found');

    return this.releaseService.delete(id);
  }
}
