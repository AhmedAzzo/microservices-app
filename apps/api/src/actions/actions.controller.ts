import { IBaseQueryParamsDto, IdDto } from '@app/common';
import { BaseController } from '@app/common/base';
import {
  getFilterQuery,
  getPaginationQuery,
} from '@app/common/utils/api.utils';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('actions')
@ApiTags('actions')
export class ActionsController extends BaseController {
  constructor(private readonly actionService: ActionsService) {
    super();
  }

  @Get('/:id')
  async getCategories(
    @Param() { id }: IdDto,
    @Query() queryParams: IBaseQueryParamsDto,
  ) {
    const queryKeyMapper = {};
    const queryValueParser = {};
    const paginationQuery = getPaginationQuery(
      { ...queryParams },
      queryKeyMapper,
    );

    const query = getFilterQuery(
      queryParams.filter || {},
      queryKeyMapper,
      queryValueParser,
    );

    return this.formatResponse({
      message: '',
      paginationList: {
        ...paginationQuery,
        list: await this.actionService.getAll(
          { ...query, order: id },
          { ...paginationQuery },
        ),
      },
    });
  }
}
