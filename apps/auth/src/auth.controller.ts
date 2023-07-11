import { CurrentUser, IRole, IUser, RolesProjection, User, UserProjection, UserStatus } from '@app/common';
import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RolesRepository } from '../../../libs/common/src/dbhelper/roles.repository';
import { keyBy, Dictionary } from 'lodash';
import { UsersRepository } from '../../../libs/common/src/dbhelper/users.repository';
import { LoginDto } from '@app/common/dto/auth/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly rolesRepository: RolesRepository,
    private readonly usersRepository: UsersRepository
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() body: LoginDto,
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response,
  ) {
    const jwt = await this.authService.login(user, response);
    response.send(jwt);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern('authenticate')
  async authenticate(@Payload() data: any) {
    let user: IUser = data.user;
    const roles: IRole[] = await this.rolesRepository.find({ _id: { $in: user.roles }, status: 'active' },
      { select: { ...RolesProjection } }
    );
    const rolesMap: Dictionary<{
      _id: string,
      status: string,
      code: string,
      name: string,
      description: string,
      iampolicies: [],
      id: number
    }> = keyBy(roles, '_id');
    user.roles = user?.roles?.map(role => rolesMap[role]);
    return data.user;
  }

  @MessagePattern('users')
  async users(@Payload() data: any) {
    const targetUsers: IUser[] = await this.usersRepository.find({
      _id: { $in: data?._ids },
      "meta.orgInfo.code": data?.code,
      status: UserStatus.active
    },
      { select: { ...UserProjection } });
    return targetUsers || [];
  }
}