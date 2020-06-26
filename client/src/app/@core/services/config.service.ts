import {Injectable} from '@angular/core';
import * as _ from 'ramda';

import {Logger} from "../logger.service";
import {ApiService, MenuEntity} from "./api.service";

const log = new Logger('ConfigService');

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private apiService: ApiService) {
    log.debug('[constructor]')
  }

  public async load(): Promise<boolean> {
    log.debug('[load]');
    const menus = await this.apiService.getAllMenu().toPromise();
    if (!_.isNil(menus)) {
      await this.apiService.createManyMenu(<MenuEntity[]>[
        {title: 'Avatar', icon: 'k-i-user', module: 'module-avatar'},
        {title: 'Card', icon: 'k-i-image', module: 'module-card'},
        {title: 'PanelBar', icon: 'k-i-menu', module: 'module-panelbar'},
        {title: 'Splitter', icon: 'k-i-arrows-resizing', module: 'module-splitter'},
        {title: 'Stepper', icon: 'k-i-list-numbered', module: 'module-stepper'},
      ]).toPromise();
    }
    return Promise.resolve(true);
  }
}
