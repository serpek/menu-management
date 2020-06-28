import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplitterComponent} from './splitter.component';
import {LayoutModule} from "@progress/kendo-angular-layout";


@NgModule({
    imports: [
        CommonModule,
        LayoutModule
    ],
  declarations: [SplitterComponent]
})
export class SplitterModule {
  static entry = SplitterComponent;
}
