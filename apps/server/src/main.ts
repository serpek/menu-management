import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
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

  await app.listen(process.env.API_PORT || env.API_DEFAULT_PORT);
}

bootstrap().catch(err => console.error(err));
