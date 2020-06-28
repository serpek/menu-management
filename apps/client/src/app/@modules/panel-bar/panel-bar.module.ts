import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelBarComponent} from './panel-bar.component';
import {LayoutModule} from "@progress/kendo-angular-layout";


@NgModule({
    imports: [
        CommonModule,
        LayoutModule
    ],
  declarations: [PanelBarComponent]
})
export class PanelBarModule {
  static entry = PanelBarComponent;
}
