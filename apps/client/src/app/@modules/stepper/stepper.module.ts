import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepperComponent} from './stepper.component';
import {LayoutModule} from "@progress/kendo-angular-layout";


@NgModule({
    imports: [
        CommonModule,
        LayoutModule
    ],
  declarations: [StepperComponent]
})
export class StepperModule {
  static entry = StepperComponent;
}
