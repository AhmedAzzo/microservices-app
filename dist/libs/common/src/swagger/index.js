"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocument = void 0;
const swagger_1 = require("@nestjs/swagger");
const SWAGGER_CONFIG = {
    title: 'api management system',
    description: 'here all apis with test using swagger and nest js.',
    version: '1.0',
    tags: [],
};
function createDocument(app) {
    const builder = new swagger_1.DocumentBuilder()
        .setTitle(SWAGGER_CONFIG.title)
        .setDescription(SWAGGER_CONFIG.description)
        .addBearerAuth()
        .setVersion(SWAGGER_CONFIG.version);
    for (const tag of SWAGGER_CONFIG.tags) {
        builder.addTag(tag);
    }
    const options = builder.build();
    return swagger_1.SwaggerModule.createDocument(app, options);
}
exports.createDocument = createDocument;
//# sourceMappingURL=index.js.map