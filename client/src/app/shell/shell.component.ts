import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DrawerSelectEvent} from "@progress/kendo-angular-layout";

import {Logger} from "../@core";
import {environment} from "../../environments/environment";
import {ApiService, MenuEntity} from "../@core/services/api.service";

const log = new Logger('ShellComponent');

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShellComponent implements OnInit {
  public selected = 'Avatar';
  public items: Array<MenuEntity> = [];

  constructor(private apiService: ApiService) {
    log.debug('constructor');
  }

  async ngOnInit(): Promise<void> {
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');
    this.items = await this.apiService.getAllMenu().toPromise();
  }

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }
}
