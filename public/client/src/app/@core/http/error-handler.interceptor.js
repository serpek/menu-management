"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ErrorHandlerInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const logger_service_1 = require("../logger.service");
const environment_1 = require("../../../environments/environment");
const log = new logger_service_1.Logger('ErrorHandlerInterceptor');
let ErrorHandlerInterceptor = ErrorHandlerInterceptor_1 = class ErrorHandlerInterceptor {
    intercept(request, next) {
        return next.handle(request).pipe(operators_1.catchError((error) => ErrorHandlerInterceptor_1.errorHandler(error)));
    }
    static errorHandler(response) {
        if (!environment_1.environment.production) {
            log.error('Request error', response);
        }
        throw response;
    }
};
ErrorHandlerInterceptor = ErrorHandlerInterceptor_1 = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    })
], ErrorHandlerInterceptor);
exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;
//# sourceMappingURL=error-handler.interceptor.js.map