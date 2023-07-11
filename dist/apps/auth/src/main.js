"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const auth_module_1 = require("./auth.module");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
const nestjs_pino_1 = require("nestjs-pino");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@app/common/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(auth_module_1.AuthModule);
    const configService = app.get(config_1.ConfigService);
    app.connectMicroservice({
        transport: microservices_1.Transport.TCP,
        options: {
            host: '0.0.0.0',
            port: configService.get('TCP_PORT'),
        },
    });
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.useLogger(app.get(nestjs_pino_1.Logger));
    await app.startAllMicroservices();
    swagger_1.SwaggerModule.setup('docs', app, (0, swagger_2.createDocument)(app));
    common_2.Logger.log(`AUTH APP IS Listening on port ${configService.get('HTTP_PORT')}`);
    await app.listen(configService.get('HTTP_PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map