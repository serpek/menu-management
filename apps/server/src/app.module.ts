import {Module} from '@nestjs/common';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MenuManagerModule} from './menu-manager/menu-manager.module';
import {ContactsModule} from './contacts/contacts.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'client')
    }),
    MenuManagerModule,
    ContactsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
