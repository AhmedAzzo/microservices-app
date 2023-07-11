import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AUTH_SERVICE, LoggerModule } from '@app/common';
import { UploaderController } from './uploader.controller';
import { UploaderService } from './uploader.service';
import * as Joi from 'joi';
import { HealthModule } from '@app/common';
import { MediaUploadModule } from './cloud-providers';
import { MulterModule } from '@nestjs/platform-express';
import { ClientsModule, Transport } from '@nestjs/microservices';
//  I have a problem with this module, 
// import { HttpModule } from '@nestjs/axios';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/uploader/.env',
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
        PRIVATE_KEY: Joi.string().required(),
        PROJECT_ID: Joi.string().required(),
        CLIENT_EMAIL: Joi.string().required(),
        BUCKET: Joi.string().required(),
      }),
    }),
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('AUTH_HOST'),
            port: configService.get('AUTH_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
    LoggerModule,
    HealthModule,
    MediaUploadModule.register(),
    MulterModule.register({
      fileFilter: (req, file, callback) => {
        file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
        callback(null, true);
      },
    }),
    // HttpModule.register({
    //   timeout: 240000,
    //   maxRedirects: 5,
    // }),
  ],
  controllers: [UploaderController],
  providers: [UploaderService],
})
export class UploaderModule { }
