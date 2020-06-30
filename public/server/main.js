"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const app_module_1 = require("./app.module");
const env_1 = require("./env");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const version = require('../../../package.json').version || '';
    app.setGlobalPrefix(env_1.env.API_DEFAULT_PREFIX);
    const options = new swagger_1.DocumentBuilder()
        .setTitle(env_1.env.SWAGGER_TITLE)
        .setDescription(env_1.env.SWAGGER_DESCRIPTION)
        .setVersion(version)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(env_1.env.SWAGGER_PREFIX, app, document);
    app.enableCors();
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(new rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    await app.listen(process.env.API_PORT || env_1.env.API_DEFAULT_PORT);
}
bootstrap().catch(err => console.error(err));
//# sourceMappingURL=main.js.map