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
const router_1 = require("@angular/router");
const kendo_angular_layout_1 = require("@progress/kendo-angular-layout");
const kendo_angular_buttons_1 = require("@progress/kendo-angular-buttons");
const kendo_angular_inputs_1 = require("@progress/kendo-angular-inputs");
const shell_component_1 = require("./shell.component");
const _core_1 = require("../@core");
const log = new _core_1.Logger('ShellModule');
let ShellModule = class ShellModule {
    constructor() {
        log.debug('constructor');
    }
};
ShellModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            kendo_angular_layout_1.LayoutModule,
            kendo_angular_buttons_1.ButtonsModule,
            kendo_angular_layout_1.DrawerModule,
            kendo_angular_inputs_1.InputsModule
        ],
        declarations: [shell_component_1.ShellComponent],
    }),
    __metadata("design:paramtypes", [])
], ShellModule);
exports.ShellModule = ShellModule;
//# sourceMappingURL=shell.module.js.map