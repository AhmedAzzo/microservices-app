import { Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
            colorize: true,
            customColors: 'err:red,info:blue',
            messageFormat: '{levelLabel} - {pid} - url:{req.url} - {msg} - response status = {res.statusCode} - response time = {responseTime} ms ',
          },
        },
      },
    }),
  ],
})
export class LoggerModule { }