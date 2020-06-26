import {Component, ViewEncapsulation} from '@angular/core';
import {Logger} from "../@core";

const log = new Logger('HomeComponent');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  constructor() {
    log.debug('constructor');
  }
}
