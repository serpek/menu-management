import {Compiler, Inject, Injectable, InjectionToken, Injector, NgModule, NgModuleFactory, Optional, SkipSelf, Type, ViewContainerRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import {RouteReusableStrategy} from './route-reusable-strategy';
import {ApiPrefixInterceptor} from './http/api-prefix.interceptor';
import {ErrorHandlerInterceptor} from './http/error-handler.interceptor';
import {Logger} from "./logger.service";
import {CoreService} from "./services/core.service";
import {API_BASE_URL, ApiService} from "./services/api.service";
import {environment} from "../../environments/environment";

const log = new Logger('CoreModule');

export const LAZY_WIDGETS = new InjectionToken<{ [key: string]: string }>('LAZY_WIDGETS');

export const lazyWidgets: { path: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    path: 'avatar',
    loadChildren: () => import('../@modules/avatar/avatar.module').then(m => m.AvatarModule)
  }, {
    path: 'card',
    loadChildren: () => import('../@modules/card/card.module').then(m => m.CardModule)
  }, {
    path: 'panel-bar',
    loadChildren: () => import('../@modules/panel-bar/panel-bar.module').then(m => m.PanelBarModule)
  }, {
    path: 'splitter',
    loadChildren: () => import('../@modules/splitter/splitter.module').then(m => m.SplitterModule)
  }, {
    path: 'stepper',
    loadChildren: () => import('../@modules/stepper/stepper.module').then(m => m.StepperModule)
  }
];

export function lazyArrayToObj() {
  const result = {};
  for (const w of lazyWidgets) {
    result[w.path] = w.loadChildren;
  }
  return result;
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    CoreService,
    ApiService,
    {provide: API_BASE_URL, useValue: environment.serverUrl},
    {provide: LAZY_WIDGETS, useFactory: lazyArrayToObj},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    log.debug('constructor');
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}


@Injectable({
  providedIn: 'root'
})
export class ModuleLoaderService {
  constructor(private injector: Injector, private compiler: Compiler, @Inject(LAZY_WIDGETS) private lazyWidgets: { [key: string]: () => Promise<NgModuleFactory<any> | Type<any>> }) {
  }

  async load(name: string, container: ViewContainerRef) {
    const tempModule = await this.lazyWidgets[name]();

    let moduleFactory;
    if (tempModule instanceof NgModuleFactory) {
      // For AOT
      moduleFactory = tempModule;
    } else {
      // For JIT
      moduleFactory = await this.compiler.compileModuleAsync(tempModule);
    }

    const entryComponent = (moduleFactory.moduleType as any).entry;
    const moduleRef = moduleFactory.create(this.injector);

    const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);

    container.createComponent(compFactory);
  }
}
