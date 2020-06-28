import {NestFactory} from "@nestjs/core";
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as rateLimit from "express-rate-limit";

import {AppModule} from './app.module';
import {env} from "./env";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const version = require('../../../package.json').version || '';

  app.setGlobalPrefix(env.API_DEFAULT_PREFIX);
  const options = new DocumentBuilder()
    .setTitle(env.SWAGGER_TITLE)
    .setDescription(env.SWAGGER_DESCRIPTION)
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(env.SWAGGER_PREFIX, app, document);

  app.enableCors();
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(new rateLimit({windowMs: 15 * 60 * 1000, max: 100}));

  app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true}));

  await app.listen(process.env.API_PORT || env.API_DEFAULT_PORT);
}

bootstrap().catch(err => console.error(err));
