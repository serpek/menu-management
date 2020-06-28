import {Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation,} from '@angular/core';
import {DrawerSelectEvent} from "@progress/kendo-angular-layout";
import {map} from "rxjs/operators";
import {plainToClass} from "class-transformer";
import {isEmpty} from "ramda";

import {Logger, ModuleLoaderService} from "../@core";
import {environment} from "../../environments/environment";
import {MenuItem} from "./menu-item";
import {ApiService} from "../@core/services/api.service";

const log = new Logger('ShellComponent');

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShellComponent implements OnInit {
  @ViewChild('moduleContainer', {read: ViewContainerRef, static: true})
  container: ViewContainerRef;

  public selected: MenuItem;
  public items: Array<MenuItem> = [];

  constructor(private moduleLoader: ModuleLoaderService, private apiService: ApiService) {
    log.debug('constructor');
  }

  async ngOnInit(): Promise<void> {
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');
    const response = await this.apiService.getAllMenu().pipe(map(value => plainToClass(MenuItem, value))).toPromise();
    if (!isEmpty(response)) {
      Object.assign(response[0], {selected: true});
      this.items = response;
      this.loadModule(response[0].module);
    }
  }

  loadModule(moduleName: string): void {
    this.container.clear();
    this.moduleLoader.load(moduleName, this.container).then(r => {
      this.selected = this.items.find(i => i.selected);
    });
  }

  public onSelect(ev: DrawerSelectEvent): void {
    this.loadModule(ev.item.module);
  }
}
