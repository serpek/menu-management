import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplitterComponent} from './splitter.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SplitterComponent]
})
export class SplitterModule {
  static entry = SplitterComponent;
}
