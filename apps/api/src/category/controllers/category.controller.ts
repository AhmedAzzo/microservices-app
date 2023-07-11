import {
  CreateCategoryDto,
  CurrentUser,
  IBaseQueryParamsDto,
  IdDto,
  Roles,
  SystemRoles,
  UpdateCategoryDto,
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
import { CategoryService } from '../services/category.service';

@Controller('category')
@ApiTags('Categories')
@ApiBearerAuth()
@Roles(SystemRoles.category_manager)
@UseGuards(JwtAuthGuard)
export class CategoryController extends BaseController {
  constructor(private readonly categoryService: CategoryService) {
    super();
  }

  @Get()
  async getCategories(@Query() queryParams: IBaseQueryParamsDto) {
    const queryKeyMapper = {
      name: 'name',
      // date: 'createdAt',
      // user: 'user',
    };

    const queryValueParser = {
      // Only used as an example
      // id: (value) => {
      //   return `{value}`;
      // },
    };

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
        list: await this.categoryService.getAll(query, { ...paginationQuery }),
      },
    });
  }
  @Get('/:id')
  async getCategory(@Param() { id }: IdDto) {
    const category = await this.categoryService.getOne(id);
    if (!category) {
      return this.throwNotFoundError('Category not found');
    }
    return this.categoryService.getOne(id);
  }
  @Post()
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
    @CurrentUser() user: User,
  ) {
    const meta = getMeta(user.meta, user.id);
    return this.formatResponse({
      message: 'Category created successfully',
      data: await this.categoryService.create(createCategoryDto, meta),
    });
  }
  @Put('/:id')
  async editCategory(
    @Param() { id }: IdDto,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @CurrentUser() user: User,
  ) {
    const category = await this.categoryService.getOne(id);
    if (!category) {
      return this.throwNotFoundError('Category not found');
    }

    const meta = getMeta(user.meta, user.id);

    return this.formatResponse({
      message: 'Category updated successfully',
      data: await this.categoryService.update(id, updateCategoryDto, meta),
    });
  }

  @Delete('/:id')
  async deleteCategory(@Param() { id }: IdDto) {
    const category = await this.categoryService.getOne(id);
    if (!category) {
      return this.throwNotFoundError('Category not found');
    }
    return this.formatResponse({
      message: 'Category deleted successfully',
      data: await this.categoryService.delete(id),
    });
  }
}
