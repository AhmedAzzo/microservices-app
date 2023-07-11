"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const nestjs_pino_1 = require("nestjs-pino");
const common_2 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@app/common/swagger");
const bodyParser = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.useLogger(app.get(nestjs_pino_1.Logger));
    app.use(cookieParser());
    app.use(bodyParser.json({ limit: '10mb' }));
    swagger_1.SwaggerModule.setup('docs', app, (0, swagger_2.createDocument)(app));
    const configService = app.get(config_1.ConfigService);
    common_2.Logger.log(`TUV-API APP IS Listening on port ${configService.get('PORT')}`);
    await app.listen(configService.get('PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map