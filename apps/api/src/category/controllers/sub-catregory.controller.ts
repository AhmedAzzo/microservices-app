import {
  CreateSubCategoryDto,
  CurrentUser,
  IBaseQueryParamsDto,
  IdDto,
  Roles,
  SystemRoles,
  UpdateSubCategoryDto,
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
import { SubCategoryService } from '../services/sub-catregory.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CategoryService } from '../services/category.service';
import { JwtAuthGuard } from '@app/common/auth';
import {
  getFilterQuery,
  getMeta,
  getPaginationQuery,
} from '@app/common/utils/api.utils';
import { BaseController } from '@app/common/base';
import { Types } from 'mongoose';

@Controller('sub-category')
@ApiTags('Sub Categories')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Roles(SystemRoles.category_manager)
export class SubCategoryController extends BaseController {
  constructor(
    private readonly subCategoryService: SubCategoryService,
    private readonly categoryService: CategoryService,
  ) {
    super();
  }

  @Get('/:categoryId')
  async getSubCategories(
    @Param('categoryId') categoryId: string,
    @Query() queryParams: IBaseQueryParamsDto,
  ) {
    const queryKeyMapper = {
      name: 'name',
    };

    const queryValueParser = {};

    const paginationQuery = getPaginationQuery(queryParams, queryKeyMapper);

    // TODO: handle error from one file, i have to filter by category id
    const query = getFilterQuery(
      queryParams.filter || {},
      queryKeyMapper,
      queryValueParser,
    );

    return this.formatResponse({
      message: '',
      paginationList: {
        ...paginationQuery,
        list: await this.subCategoryService.getAll(query, {
          ...paginationQuery,
        }),
      },
    });
  }
  @Get('/:id/details')
  async getSubCategory(@Param() { id }: IdDto) {
    return this.formatResponse({
      message: '',
      data: await this.subCategoryService.getOne(id),
    });
  }
  @Post()
  async createSubCategory(
    @Body() createCategoryDto: CreateSubCategoryDto,
    @CurrentUser() user: User,
  ) {
    const category = await this.categoryService.getOne(
      createCategoryDto.category,
    );

    if (!category) return this.throwNotFoundError('Category not found');

    const meta = getMeta(user.meta, user.id);
    return this.formatResponse({
      message: '',
      data: await this.subCategoryService.create(createCategoryDto, meta),
    });
  }
  @Put('/:id')
  async editSubCategory(
    @Param() { id }: IdDto,
    @Body() updateCategoryDto: UpdateSubCategoryDto,
    @CurrentUser() user: User,
  ) {
    const category = await this.categoryService.getOne(
      updateCategoryDto.category,
    );

    if (!category) return this.throwNotFoundError('Category not found');
    const meta = getMeta(user.meta, user.id);

    return this.formatResponse({
      message: '',
      data: await this.subCategoryService.update(id, updateCategoryDto, meta),
    });
  }
  @Delete('/:id')
  async deleteSubCategory(@Param() { id }: IdDto) {
    const category = await this.categoryService.getOne(id);

    if (!category) return this.throwNotFoundError('Category not found');
    return this.formatResponse({
      message: '',
      data: await this.subCategoryService.delete(id),
    });
  }
}
