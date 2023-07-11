import {
  CurrentUser,
  IBaseQueryParams,
  IdDto,
  Roles,
  SystemRoles,
  User,
} from '@app/common';
import { JwtAuthGuard } from '@app/common/auth';
import { BaseController } from '@app/common/base';
import {
  CreateOrderDto,
  UpdateOrderDto,
  UpdateOrderStatusDto,
} from '@app/common/dto/order-dtos';
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
import { OrderService } from '../services/order.service';

@Controller('coc')
@ApiTags('COC')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Roles(SystemRoles.order_manager)
export class OrderController extends BaseController {
  constructor(private readonly orderService: OrderService) {
    super();
  }

  @Get()
  async getOrders(@Query() queryParams: IBaseQueryParams) {
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
        list: await this.orderService.getAll(query, { ...paginationQuery }),
      },
    });
  }
  @Get('/:id')
  async getOrder(@Param() { id }: IdDto) {
    const order = await this.orderService.getOne(id);
    if (!order) return this.throwNotFoundError('Order Not Found');

    return this.formatResponse({
      message: '',
      data: await this.orderService.getOne(id),
    });
  }
  @Post()
  async createOrder(
    @Body() createOrderDto: CreateOrderDto,
    @CurrentUser() user: User,
  ) {
    const meta = getMeta(user.meta, user.id);
    return this.formatResponse({
      message: 'create order success',
      data: await this.orderService.create(createOrderDto, meta),
    });
  }
  @Put('/:id')
  async editCategory(
    @Param() { id }: IdDto,
    @Body() updateOrderDto: UpdateOrderDto,
    @CurrentUser() user: User,
  ) {
    const order = await this.orderService.getOne(id);
    if (!order) return this.throwNotFoundError('Order Not Found');

    const meta = getMeta(user.meta, user.id);
    return this.formatResponse({
      message: 'update order success',
      data: await this.orderService.update(id, updateOrderDto, meta),
    });
  }
  @Put('/:id/:status/status')
  async editStatus(
    @Param() { id }: IdDto,
    @Param() params: UpdateOrderStatusDto,
  ) {

    return this.formatResponse({
      message: 'update order status success',
      data: await this.orderService.status(id, params.status),
    });
  }
  @Delete('/:id')
  async deleteOrder(@Param() { id }: IdDto) {
    const order = await this.orderService.getOne(id);
    if (!order) return this.throwNotFoundError('Order Not Found');

    return this.formatResponse({
      message: 'delete order success',
      data: await this.orderService.delete(id),
    });
  }
}
