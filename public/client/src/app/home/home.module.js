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
const common_1 = require("@angular/common");
const home_routing_module_1 = require("./home-routing.module");
const home_component_1 = require("./home.component");
const _core_1 = require("../@core");
const _shared_1 = require("../@shared");
const log = new _core_1.Logger('HomeModule');
let HomeModule = class HomeModule {
    constructor() {
        log.debug('constructor');
    }
};
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            _core_1.CoreModule,
            _shared_1.SharedModule,
            home_routing_module_1.HomeRoutingModule
        ],
        declarations: [home_component_1.HomeComponent],
    }),
    __metadata("design:paramtypes", [])
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map