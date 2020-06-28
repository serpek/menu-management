import {Component} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  public current = 1;

  public steps = [
    {label: 'Personal Info', icon: 'user'},
    {label: 'Education', icon: 'dictionary-add'},
    {label: 'Attachments', icon: 'attachment', optional: true},
    {label: 'Preview', icon: 'preview'},
    {label: 'Submit', icon: 'file-add'}
  ];

}
