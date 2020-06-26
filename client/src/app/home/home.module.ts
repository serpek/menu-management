import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {CoreModule, Logger} from "../@core";
import {SharedModule} from "../@shared";

const log = new Logger('HomeModule');

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
  constructor() {
    log.debug('constructor');
  }
}
