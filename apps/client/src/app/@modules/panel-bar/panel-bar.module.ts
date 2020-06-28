import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelBarComponent} from './panel-bar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PanelBarComponent]
})
export class PanelBarModule {
  static entry = PanelBarComponent;
}
