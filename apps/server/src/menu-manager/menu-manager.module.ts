import {Module} from '@nestjs/common';
import {InMemoryDBModule} from "@nestjs-addons/in-memory-db";
import {MenuManagerController} from './menu-manager.controller';

@Module({
  imports: [
    InMemoryDBModule.forFeature('menu')
  ],
  controllers: [
    MenuManagerController
  ]
})
export class MenuManagerModule {
}
