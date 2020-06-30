import { Compiler, InjectionToken, Injector, NgModuleFactory, Type, ViewContainerRef } from '@angular/core';
export declare const LAZY_WIDGETS: InjectionToken<{
    [key: string]: string;
}>;
export declare const lazyWidgets: {
    path: string;
    loadChildren: () => Promise<NgModuleFactory<any> | Type<any>>;
}[];
export declare function lazyArrayToObj(): {};
export declare class CoreModule {
    constructor(parentModule: CoreModule);
}
export declare class ModuleLoaderService {
    private injector;
    private compiler;
    private lazyWidgets;
    constructor(injector: Injector, compiler: Compiler, lazyWidgets: {
        [key: string]: () => Promise<NgModuleFactory<any> | Type<any>>;
    });
    load(name: string, container: ViewContainerRef): Promise<void>;
}
