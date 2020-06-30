import { OnInit, ViewContainerRef } from '@angular/core';
import { DrawerSelectEvent } from "@progress/kendo-angular-layout";
import { ModuleLoaderService } from "../@core";
import { MenuItem } from "./menu-item";
import { ApiService } from "../@core/services/api.service";
export declare class ShellComponent implements OnInit {
    private moduleLoader;
    private apiService;
    container: ViewContainerRef;
    selected: MenuItem;
    items: Array<MenuItem>;
    constructor(moduleLoader: ModuleLoaderService, apiService: ApiService);
    ngOnInit(): Promise<void>;
    loadModule(moduleName: string): void;
    onSelect(ev: DrawerSelectEvent): void;
}
