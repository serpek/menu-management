import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DrawerModule, LayoutModule} from "@progress/kendo-angular-layout";
import {ButtonsModule} from "@progress/kendo-angular-buttons";
import {InputsModule} from "@progress/kendo-angular-inputs";

import {ShellComponent} from './shell.component';
import {Logger} from "../@core";

const log = new Logger('ShellModule');

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    /*Progress-Telerik*/
    LayoutModule,
    ButtonsModule,
    DrawerModule,
    InputsModule
  ],
  declarations: [ShellComponent],
})
export class ShellModule {
  constructor() {
    log.debug('constructor');
  }
}
