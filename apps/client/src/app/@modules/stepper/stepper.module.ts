import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepperComponent} from './stepper.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StepperComponent]
})
export class StepperModule {
  static entry = StepperComponent;
}
