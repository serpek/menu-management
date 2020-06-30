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
const ramda_1 = require("ramda");
const logger_service_1 = require("../logger.service");
const api_service_1 = require("./api.service");
const log = new logger_service_1.Logger('ConfigService');
let ConfigService = class ConfigService {
    constructor(apiService) {
        this.apiService = apiService;
        log.debug('[constructor]');
    }
    async load() {
        log.debug('[load]');
        const menus = await this.apiService.getAllMenu().toPromise();
        if (ramda_1.isEmpty(menus)) {
            await this.apiService.createManyMenu([
                { title: 'Avatar', icon: 'k-i-user', module: 'avatar' },
                { title: 'Card', icon: 'k-i-image', module: 'card' },
                { title: 'PanelBar', icon: 'k-i-menu', module: 'panel-bar' },
                { title: 'Splitter', icon: 'k-i-arrows-resizing', module: 'splitter' },
                { title: 'Stepper', icon: 'k-i-list-numbered', module: 'stepper' },
            ]).toPromise();
        }
        return Promise.resolve(true);
    }
};
ConfigService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map