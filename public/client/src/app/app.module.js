"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/common/http");
require("reflect-metadata");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const home_module_1 = require("./home/home.module");
const _core_1 = require("./@core");
const _shared_1 = require("./@shared");
const shell_module_1 = require("./shell/shell.module");
const config_service_1 = require("./@core/services/config.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpClientModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            _core_1.CoreModule,
            _shared_1.SharedModule,
            shell_module_1.ShellModule,
            home_module_1.HomeModule
        ],
        providers: [
            {
                provide: core_1.APP_INITIALIZER,
                useFactory: (config) => async () => await config.load(),
                deps: [config_service_1.ConfigService],
                multi: true
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map