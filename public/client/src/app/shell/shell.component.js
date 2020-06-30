"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const class_transformer_1 = require("class-transformer");
const ramda_1 = require("ramda");
const _core_1 = require("../@core");
const environment_1 = require("../../environments/environment");
const menu_item_1 = require("./menu-item");
const api_service_1 = require("../@core/services/api.service");
const log = new _core_1.Logger('ShellComponent');
let ShellComponent = class ShellComponent {
    constructor(moduleLoader, apiService) {
        this.moduleLoader = moduleLoader;
        this.apiService = apiService;
        this.items = [];
        log.debug('constructor');
    }
    async ngOnInit() {
        if (environment_1.environment.production) {
            _core_1.Logger.enableProductionMode();
        }
        log.debug('init');
        const response = await this.apiService.getAllMenu().pipe(operators_1.map(value => class_transformer_1.plainToClass(menu_item_1.MenuItem, value))).toPromise();
        if (!ramda_1.isEmpty(response)) {
            Object.assign(response[0], { selected: true });
            this.items = response;
            this.loadModule(response[0].module);
        }
    }
    loadModule(moduleName) {
        this.container.clear();
        this.moduleLoader.load(moduleName, this.container).then(r => {
            this.selected = this.items.find(i => i.selected);
        });
    }
    onSelect(ev) {
        this.loadModule(ev.item.module);
    }
};
__decorate([
    core_1.ViewChild('moduleContainer', { read: core_1.ViewContainerRef, static: true }),
    __metadata("design:type", core_1.ViewContainerRef)
], ShellComponent.prototype, "container", void 0);
ShellComponent = __decorate([
    core_1.Component({
        selector: 'app-shell',
        templateUrl: './shell.component.html',
        styleUrls: ['./shell.component.scss'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [_core_1.ModuleLoaderService, api_service_1.ApiService])
], ShellComponent);
exports.ShellComponent = ShellComponent;
//# sourceMappingURL=shell.component.js.map