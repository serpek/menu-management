import {HttpModule, Module} from '@nestjs/common';
import {ContactsController} from './contacts.controller';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [ContactsController]
})
export class ContactsModule {
}
