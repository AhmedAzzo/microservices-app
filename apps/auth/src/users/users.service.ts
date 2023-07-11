import { CreateUserDto, IMeta, ModulesCodes, ModulesSettings } from '@app/common';
import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { GetUserDto } from '@app/common';

import { OrgsService } from '../orgs/org.service';
import { BaseFactory } from '@app/common/base/Base.factory';
import { UsersRepository } from '@app/common/dbhelper';

@Injectable()
export class UsersService extends BaseFactory {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly orgsService: OrgsService,
  ) {
    super(usersRepository)
  }

  async create(createUserDto: CreateUserDto, meta: IMeta) {
    await this.validateCreateUserDto(createUserDto);
    let id = await this.orgsService.generateSequenceNumber(meta.orgInfo.code, ModulesCodes.user, ModulesSettings.userSettings);
    createUserDto.id = id;
    return this.usersRepository.create({
      ...createUserDto, meta: meta,
      password: await bcrypt.hash(createUserDto.password, 10),
    } as any);
  }

  private async validateCreateUserDto(createUserDto: CreateUserDto) {
    try {
      await this.usersRepository.findOne({ email: createUserDto.email });
    } catch (err) {
      return;
    }
    throw new UnprocessableEntityException('Email already exists.');
  }

  async verifyUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email });
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials are not valid.');
    }
    return user;
  }

  async getUser(getUserDto: GetUserDto) {
    return this.usersRepository.findOne(getUserDto);
  }
}

