import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MenuManagerModule} from './menu-manager/menu-manager.module';

@Module({
  imports: [
    MenuManagerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
