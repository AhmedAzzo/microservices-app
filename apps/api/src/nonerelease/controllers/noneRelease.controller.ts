import {
  CreateNoneReleaseDto,
  CurrentUser,
  IBaseQueryParamsDto,
  IdDto,
  Roles,
  SystemRoles,
  UpdateNoneReleaseDto,
  User,
} from '@app/common';
import { JwtAuthGuard } from '@app/common/auth';
import { BaseController } from '@app/common/base';
import {
  getFilterQuery,
  getMeta,
  getPaginationQuery,
} from '@app/common/utils/api.utils';
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
import { NoneReleaseService } from '../services/nonerelease.service';

@Controller('none-release')
@ApiTags('None Release')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Roles(SystemRoles.nonrelease_manager)
export class NoneReleaseController extends BaseController {
  constructor(private readonly noneReleaseService: NoneReleaseService) {
    super();
  }

  @Get()
  async getNoneReleases(@Query() queryParams: IBaseQueryParamsDto) {
    const queryKeyMapper = {};
    const queryValueParser = {};
    const paginationQuery = getPaginationQuery(queryParams, queryKeyMapper);

    const query = getFilterQuery(
      queryParams.filter || {},
      queryKeyMapper,
      queryValueParser,
    );

    return this.formatResponse({
      message: '',
      paginationList: {
        ...paginationQuery,
        list: await this.noneReleaseService.getAll(query, {
          ...paginationQuery,
        }),
      },
    });
  }
  @Get('/:id')
  async getNoneRelease(@Param() { id }: IdDto) {
    const nonRelease = await this.noneReleaseService.getOne(id);
    if (!nonRelease) return this.throwNotFoundError('None Release Not Found');
    return this.noneReleaseService.getOne(id);
  }
  @Post()
  async createNoneRelease(
    @Body() createNoneReleaseDto: CreateNoneReleaseDto,
    @CurrentUser() user: User,
  ) {
    const meta = getMeta(user.meta, user.id);
    return this.formatResponse({
      message: 'Create None Release Successfully',
      data: await this.noneReleaseService.create(createNoneReleaseDto, meta),
    });
  }
  @Put('/:id')
  async editCategory(
    @Param() { id }: IdDto,
    @Body() updateNoneReleaseDto: UpdateNoneReleaseDto,
    @CurrentUser() user: User,
  ) {
    const nonRelease = await this.noneReleaseService.getOne(id);
    if (!nonRelease) return this.throwNotFoundError('None Release Not Found');

    const meta = getMeta(user.meta, user.id);

    return this.formatResponse({
      message: 'Update None Release Successfully',
      data: await this.noneReleaseService.update(
        id,
        updateNoneReleaseDto,
        meta,
      ),
    });
  }
  @Put('/:id/:status/status')
  async editStatus(
    @Param() { id }: IdDto,
    @Param('status') status: string,
    @Body() updateNoneReleaseDto: UpdateNoneReleaseDto,
  ) {
    const nonRelease = await this.noneReleaseService.getOne(id);
    if (!nonRelease) return this.throwNotFoundError('None Release Not Found');

    return this.formatResponse({
      message: 'Update None Release Successfully',
      data: await this.noneReleaseService.status(
        id,
        status,
        updateNoneReleaseDto,
      ),
    });
  }
  @Delete('/:id')
  async deleteNoneRelease(@Param() { id }: IdDto) {
    const nonRelease = await this.noneReleaseService.getOne(id);
    if (!nonRelease) return this.throwNotFoundError('None Release Not Found');
    return this.formatResponse({
      message: 'Delete None Release Successfully',
      data: await this.noneReleaseService.delete(id),
    });
  }
}
