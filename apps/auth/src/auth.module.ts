import { DatabaseModule, HealthModule, LoggerModule, } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import * as Joi from 'joi';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';
import { LocalStategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { OrgsModule } from './orgs/orgs.module';
import { RolesModule } from './roles/roles.module';
import { DbHelperModule } from '@app/common/dbhelper';

@Module({
  imports: [
    UsersModule,
    OrgsModule,
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/auth/.env',
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
        TCP_PORT: Joi.number().required(),
      }),
    }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION')}s`,
        },
      }),
      inject: [ConfigService],
    }),
    HealthModule,
    RolesModule,
    DbHelperModule
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStategy, JwtStrategy],
})
export class AuthModule { } 
