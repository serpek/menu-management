import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MenuManagerModule} from './menu-manager/menu-manager.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    MenuManagerModule,
    ContactsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
