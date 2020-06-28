import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from './avatar.component';
import {LayoutModule} from "@progress/kendo-angular-layout";


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
  ],
  declarations: [AvatarComponent]
})
export class AvatarModule {
  static entry = AvatarComponent;
}
