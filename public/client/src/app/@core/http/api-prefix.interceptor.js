"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const environment_1 = require("../../../environments/environment");
let ApiPrefixInterceptor = class ApiPrefixInterceptor {
    intercept(request, next) {
        if (!/^(http|https):/i.test(request.url)) {
            request = request.clone({ url: environment_1.environment.serverUrl + request.url });
        }
        return next.handle(request);
    }
};
ApiPrefixInterceptor = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    })
], ApiPrefixInterceptor);
exports.ApiPrefixInterceptor = ApiPrefixInterceptor;
//# sourceMappingURL=api-prefix.interceptor.js.map