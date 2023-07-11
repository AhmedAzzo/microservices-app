import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto, CurrentUser, IBaseQueryParams, User } from '@app/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { getMeta } from '@app/common/utils/api.utils';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createUser(@CurrentUser() user: User, @Body() createUserDto: CreateUserDto) {
    const meta = getMeta(user.meta, user.id);
    const newUser = this.usersService.create({ ...createUserDto }, meta);
    return newUser;
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@CurrentUser() user: User) {
    return user;
  }
  @Get('/users')
  @UseGuards(JwtAuthGuard)
  async getUserUsers(@CurrentUser() user: User, @Query() queryParams: IBaseQueryParams) {
    return user;
  }
}
