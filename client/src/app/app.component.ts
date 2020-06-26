import {Component, ViewEncapsulation} from '@angular/core';

import {Logger} from "./@core";

const log = new Logger('AppComponent');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'client';

  constructor() {
    log.debug('constructor');
  }
}
