import {
  CreateProductDto,
  CurrentUser,
  IBaseQueryParamsDto,
  IdDto,
  Roles,
  SystemRoles,
  UpdateProductDto,
  User,
} from '@app/common';
import { JwtAuthGuard } from '@app/common/auth';
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
import { OrgsService } from '../../orgs/org.service';
import { ProductService } from '../services/product.service';
import {
  getFilterQuery,
  getMeta,
  getPaginationQuery,
} from '@app/common/utils/api.utils';
import { BaseController } from '@app/common/base';

@Controller('product')
@ApiTags('Product')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Roles(SystemRoles.product_manager)
export class ProductController extends BaseController {
  constructor(
    private readonly productService: ProductService,
    private readonly orgsService: OrgsService,
  ) {
    super();
  }

  @Get()
  async getProducts(@Query() queryParams: IBaseQueryParamsDto) {
    const queryKeyMapper = {};
    const queryValueParser = {};
    const paginationQuery = getPaginationQuery(queryParams, queryKeyMapper);

    const query = getFilterQuery(
      queryParams.filter || JSON.parse(  '{}'),
      queryKeyMapper,
      queryValueParser,
    );

    return this.formatResponse({
      message: '',
      paginationList: {
        ...paginationQuery,
        list: await this.productService.getAll(query, { ...paginationQuery }),
      },
    });
  }
  @Get('/:id')
  async getProduct(@Param() { id }: IdDto) {
    const product = await this.productService.getOne(id);
    if (!product) return this.throwNotFoundError('Product Not Found');
    return this.formatResponse({
      message: '',
      data: await this.productService.getOne(id),
    });
  }
  @Post()
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    @CurrentUser() user: User,
  ) {
    const meta = getMeta(user.meta, user.id);
    return this.formatResponse({
      message: 'Product created successfully',
      data: await this.productService.create(createProductDto, meta),
    });
  }
  @Put('/:id')
  async editProduct(
    @Param() { id }: IdDto,
    @Body() updateProductDto: UpdateProductDto,
    @CurrentUser() user: User,
  ) {
    const product = await this.productService.getOne(id);
    if (!product) return this.throwNotFoundError('Product Not Found');

    const meta = getMeta(user.meta, user.id);
    return this.formatResponse({
      message: 'Product updated successfully',
      data: await this.productService.update(id, updateProductDto, meta),
    });
  }
  @Delete('/:id')
  async deleteProduct(@Param() { id }: IdDto) {
    const product = await this.productService.getOne(id);
    if (!product) return this.throwNotFoundError('Product Not Found');
    
    return this.formatResponse({
      message: 'Product deleted successfully',
      data: await this.productService.delete(id),
    });
  }
}

////////////////////
// https://drive.google.com/file/d/12LUp1PdA7DNkE6momO0VZDSuMXE1A18n/view
// https://drive.google.com/drive/u/0/folders/1PUpduloBTgBC8j7865QqTpXeP4uUFYtJ
