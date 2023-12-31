import { User } from '@app/common';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { TokenPayload } from './interfaces/token-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) { }

  async login(user: User, response: Response) {
    const tokenPayload: TokenPayload = {
      _id: user._id.toHexString(),
      id: user.id,
      status: user?.status,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      image: user?.image,
      position: user?.position,
      phoneNumber: user?.phoneNumber,
      roles: user?.roles,
      orgInfo: user?.meta?.orgInfo,
      workspaces: user?.workspaces || [],
    };
    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );
    const token = this.jwtService.sign(tokenPayload);
    response.cookie('Authentication', token, { httpOnly: true, expires });
    return token;
  }
}
