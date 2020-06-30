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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const http_1 = require("@angular/common/http");
const router_1 = require("@angular/router");
const route_reusable_strategy_1 = require("./route-reusable-strategy");
const api_prefix_interceptor_1 = require("./http/api-prefix.interceptor");
const error_handler_interceptor_1 = require("./http/error-handler.interceptor");
const logger_service_1 = require("./logger.service");
const core_service_1 = require("./services/core.service");
const api_service_1 = require("./services/api.service");
const environment_1 = require("../../environments/environment");
const log = new logger_service_1.Logger('CoreModule');
exports.LAZY_WIDGETS = new core_1.InjectionToken('LAZY_WIDGETS');
exports.lazyWidgets = [
    {
        path: 'avatar',
        loadChildren: () => Promise.resolve().then(() => require('../@modules/avatar/avatar.module')).then(m => m.AvatarModule)
    }, {
        path: 'card',
        loadChildren: () => Promise.resolve().then(() => require('../@modules/card/card.module')).then(m => m.CardModule)
    }, {
        path: 'panel-bar',
        loadChildren: () => Promise.resolve().then(() => require('../@modules/panel-bar/panel-bar.module')).then(m => m.PanelBarModule)
    }, {
        path: 'splitter',
        loadChildren: () => Promise.resolve().then(() => require('../@modules/splitter/splitter.module')).then(m => m.SplitterModule)
    }, {
        path: 'stepper',
        loadChildren: () => Promise.resolve().then(() => require('../@modules/stepper/stepper.module')).then(m => m.StepperModule)
    }
];
function lazyArrayToObj() {
    const result = {};
    for (const w of exports.lazyWidgets) {
        result[w.path] = w.loadChildren;
    }
    return result;
}
exports.lazyArrayToObj = lazyArrayToObj;
let CoreModule = class CoreModule {
    constructor(parentModule) {
        log.debug('constructor');
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }
};
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpClientModule,
            router_1.RouterModule
        ],
        providers: [
            core_service_1.CoreService,
            api_service_1.ApiService,
            { provide: api_service_1.API_BASE_URL, useValue: environment_1.environment.serverUrl },
            { provide: exports.LAZY_WIDGETS, useFactory: lazyArrayToObj },
            {
                provide: http_1.HTTP_INTERCEPTORS,
                useClass: api_prefix_interceptor_1.ApiPrefixInterceptor,
                multi: true,
            },
            {
                provide: http_1.HTTP_INTERCEPTORS,
                useClass: error_handler_interceptor_1.ErrorHandlerInterceptor,
                multi: true,
            },
            {
                provide: router_1.RouteReuseStrategy,
                useClass: route_reusable_strategy_1.RouteReusableStrategy,
            },
        ],
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;
let ModuleLoaderService = class ModuleLoaderService {
    constructor(injector, compiler, lazyWidgets) {
        this.injector = injector;
        this.compiler = compiler;
        this.lazyWidgets = lazyWidgets;
    }
    async load(name, container) {
        const tempModule = await this.lazyWidgets[name]();
        let moduleFactory;
        if (tempModule instanceof core_1.NgModuleFactory) {
            moduleFactory = tempModule;
        }
        else {
            moduleFactory = await this.compiler.compileModuleAsync(tempModule);
        }
        const entryComponent = moduleFactory.moduleType.entry;
        const moduleRef = moduleFactory.create(this.injector);
        const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
        container.createComponent(compFactory);
    }
};
ModuleLoaderService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __param(2, core_1.Inject(exports.LAZY_WIDGETS)),
    __metadata("design:paramtypes", [core_1.Injector, core_1.Compiler, Object])
], ModuleLoaderService);
exports.ModuleLoaderService = ModuleLoaderService;
//# sourceMappingURL=core.module.js.map