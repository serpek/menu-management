function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./apps/client/src/app/@core/core.module.ts":
  /*!**************************************************!*\
    !*** ./apps/client/src/app/@core/core.module.ts ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppCoreCoreModuleTs(module, exports, __webpack_require__) {
    "use strict";

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var http_1 = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var route_reusable_strategy_1 = __webpack_require__(
    /*! ./route-reusable-strategy */
    "./apps/client/src/app/@core/route-reusable-strategy.ts");

    var api_prefix_interceptor_1 = __webpack_require__(
    /*! ./http/api-prefix.interceptor */
    "./apps/client/src/app/@core/http/api-prefix.interceptor.ts");

    var error_handler_interceptor_1 = __webpack_require__(
    /*! ./http/error-handler.interceptor */
    "./apps/client/src/app/@core/http/error-handler.interceptor.ts");

    var logger_service_1 = __webpack_require__(
    /*! ./logger.service */
    "./apps/client/src/app/@core/logger.service.ts");

    var core_service_1 = __webpack_require__(
    /*! ./services/core.service */
    "./apps/client/src/app/@core/services/core.service.ts");

    var api_service_1 = __webpack_require__(
    /*! ./services/api.service */
    "./apps/client/src/app/@core/services/api.service.ts");

    var environment_1 = __webpack_require__(
    /*! ../../environments/environment */
    "./apps/client/src/environments/environment.ts");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var log = new logger_service_1.Logger('CoreModule');
    exports.LAZY_WIDGETS = new core_1.InjectionToken('LAZY_WIDGETS');
    exports.lazyWidgets = [{
      path: 'avatar',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(function () {
          return __webpack_require__(
          /*! ../@modules/avatar/avatar.module */
          "./apps/client/src/app/@modules/avatar/avatar.module.ts");
        }).then(function (m) {
          return m.AvatarModule;
        });
      }
    }, {
      path: 'card',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(function () {
          return __webpack_require__(
          /*! ../@modules/card/card.module */
          "./apps/client/src/app/@modules/card/card.module.ts");
        }).then(function (m) {
          return m.CardModule;
        });
      }
    }, {
      path: 'panel-bar',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(function () {
          return __webpack_require__(
          /*! ../@modules/panel-bar/panel-bar.module */
          "./apps/client/src/app/@modules/panel-bar/panel-bar.module.ts");
        }).then(function (m) {
          return m.PanelBarModule;
        });
      }
    }, {
      path: 'splitter',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(function () {
          return __webpack_require__(
          /*! ../@modules/splitter/splitter.module */
          "./apps/client/src/app/@modules/splitter/splitter.module.ts");
        }).then(function (m) {
          return m.SplitterModule;
        });
      }
    }, {
      path: 'stepper',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(function () {
          return __webpack_require__(
          /*! ../@modules/stepper/stepper.module */
          "./apps/client/src/app/@modules/stepper/stepper.module.ts");
        }).then(function (m) {
          return m.StepperModule;
        });
      }
    }];

    function lazyArrayToObj() {
      var result = {};

      var _iterator = _createForOfIteratorHelper(exports.lazyWidgets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var w = _step.value;
          result[w.path] = w.loadChildren;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    }

    exports.lazyArrayToObj = lazyArrayToObj;

    var CoreModule = function CoreModule(parentModule) {
      _classCallCheck(this, CoreModule);

      log.debug('constructor');

      if (parentModule) {
        throw new Error("".concat(parentModule, " has already been loaded. Import Core module in the AppModule only."));
      }
    };

    exports.CoreModule = CoreModule;
    CoreModule.ɵmod = i0.ɵɵdefineNgModule({
      type: CoreModule
    });
    CoreModule.ɵinj = i0.ɵɵdefineInjector({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)(i0.ɵɵinject(CoreModule, 12));
      },
      providers: [core_service_1.CoreService, api_service_1.ApiService, {
        provide: api_service_1.API_BASE_URL,
        useValue: environment_1.environment.serverUrl
      }, {
        provide: exports.LAZY_WIDGETS,
        useFactory: lazyArrayToObj
      }, {
        provide: http_1.HTTP_INTERCEPTORS,
        useClass: api_prefix_interceptor_1.ApiPrefixInterceptor,
        multi: true
      }, {
        provide: http_1.HTTP_INTERCEPTORS,
        useClass: error_handler_interceptor_1.ErrorHandlerInterceptor,
        multi: true
      }, {
        provide: router_1.RouteReuseStrategy,
        useClass: route_reusable_strategy_1.RouteReusableStrategy
      }],
      imports: [[common_1.CommonModule, http_1.HttpClientModule, router_1.RouterModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreModule, {
        imports: [common_1.CommonModule, http_1.HttpClientModule, router_1.RouterModule]
      });
    })();

    (function () {
      i0.ɵsetClassMetadata(CoreModule, [{
        type: core_1.NgModule,
        args: [{
          imports: [common_1.CommonModule, http_1.HttpClientModule, router_1.RouterModule],
          providers: [core_service_1.CoreService, api_service_1.ApiService, {
            provide: api_service_1.API_BASE_URL,
            useValue: environment_1.environment.serverUrl
          }, {
            provide: exports.LAZY_WIDGETS,
            useFactory: lazyArrayToObj
          }, {
            provide: http_1.HTTP_INTERCEPTORS,
            useClass: api_prefix_interceptor_1.ApiPrefixInterceptor,
            multi: true
          }, {
            provide: http_1.HTTP_INTERCEPTORS,
            useClass: error_handler_interceptor_1.ErrorHandlerInterceptor,
            multi: true
          }, {
            provide: router_1.RouteReuseStrategy,
            useClass: route_reusable_strategy_1.RouteReusableStrategy
          }]
        }]
      }], function () {
        return [{
          type: CoreModule,
          decorators: [{
            type: core_1.Optional
          }, {
            type: core_1.SkipSelf
          }]
        }];
      }, null);
    })();

    var ModuleLoaderService = /*#__PURE__*/function () {
      function ModuleLoaderService(injector, compiler, lazyWidgets) {
        _classCallCheck(this, ModuleLoaderService);

        this.injector = injector;
        this.compiler = compiler;
        this.lazyWidgets = lazyWidgets;
      }

      _createClass(ModuleLoaderService, [{
        key: "load",
        value: function load(name, container) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var tempModule, moduleFactory, entryComponent, moduleRef, compFactory;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.lazyWidgets[name]();

                  case 2:
                    tempModule = _context.sent;

                    if (!(tempModule instanceof core_1.NgModuleFactory)) {
                      _context.next = 7;
                      break;
                    }

                    moduleFactory = tempModule;
                    _context.next = 10;
                    break;

                  case 7:
                    _context.next = 9;
                    return this.compiler.compileModuleAsync(tempModule);

                  case 9:
                    moduleFactory = _context.sent;

                  case 10:
                    entryComponent = moduleFactory.moduleType.entry;
                    moduleRef = moduleFactory.create(this.injector);
                    compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
                    container.createComponent(compFactory);

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ModuleLoaderService;
    }();

    exports.ModuleLoaderService = ModuleLoaderService;

    ModuleLoaderService.ɵfac = function ModuleLoaderService_Factory(t) {
      return new (t || ModuleLoaderService)(i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i0.Compiler), i0.ɵɵinject(exports.LAZY_WIDGETS));
    };

    ModuleLoaderService.ɵprov = i0.ɵɵdefineInjectable({
      token: ModuleLoaderService,
      factory: ModuleLoaderService.ɵfac,
      providedIn: 'root'
    });

    (function () {
      i0.ɵsetClassMetadata(ModuleLoaderService, [{
        type: core_1.Injectable,
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: i0.Injector
        }, {
          type: i0.Compiler
        }, {
          type: undefined,
          decorators: [{
            type: core_1.Inject,
            args: [exports.LAZY_WIDGETS]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@core/http/api-prefix.interceptor.ts":
  /*!******************************************************************!*\
    !*** ./apps/client/src/app/@core/http/api-prefix.interceptor.ts ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppCoreHttpApiPrefixInterceptorTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var environment_1 = __webpack_require__(
    /*! ../../../environments/environment */
    "./apps/client/src/environments/environment.ts");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ApiPrefixInterceptor = /*#__PURE__*/function () {
      function ApiPrefixInterceptor() {
        _classCallCheck(this, ApiPrefixInterceptor);
      }

      _createClass(ApiPrefixInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          if (!/^(http|https):/i.test(request.url)) {
            request = request.clone({
              url: environment_1.environment.serverUrl + request.url
            });
          }

          return next.handle(request);
        }
      }]);

      return ApiPrefixInterceptor;
    }();

    exports.ApiPrefixInterceptor = ApiPrefixInterceptor;

    ApiPrefixInterceptor.ɵfac = function ApiPrefixInterceptor_Factory(t) {
      return new (t || ApiPrefixInterceptor)();
    };

    ApiPrefixInterceptor.ɵprov = i0.ɵɵdefineInjectable({
      token: ApiPrefixInterceptor,
      factory: ApiPrefixInterceptor.ɵfac,
      providedIn: 'root'
    });

    (function () {
      i0.ɵsetClassMetadata(ApiPrefixInterceptor, [{
        type: core_1.Injectable,
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@core/http/error-handler.interceptor.ts":
  /*!*********************************************************************!*\
    !*** ./apps/client/src/app/@core/http/error-handler.interceptor.ts ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppCoreHttpErrorHandlerInterceptorTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var operators_1 = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var logger_service_1 = __webpack_require__(
    /*! ../logger.service */
    "./apps/client/src/app/@core/logger.service.ts");

    var environment_1 = __webpack_require__(
    /*! ../../../environments/environment */
    "./apps/client/src/environments/environment.ts");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var log = new logger_service_1.Logger('ErrorHandlerInterceptor');

    var ErrorHandlerInterceptor = /*#__PURE__*/function () {
      function ErrorHandlerInterceptor() {
        _classCallCheck(this, ErrorHandlerInterceptor);
      }

      _createClass(ErrorHandlerInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          return next.handle(request).pipe(operators_1.catchError(function (error) {
            return ErrorHandlerInterceptor.errorHandler(error);
          }));
        }
      }], [{
        key: "errorHandler",
        value: function errorHandler(response) {
          if (!environment_1.environment.production) {
            log.error('Request error', response);
          }

          throw response;
        }
      }]);

      return ErrorHandlerInterceptor;
    }();

    exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;

    ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) {
      return new (t || ErrorHandlerInterceptor)();
    };

    ErrorHandlerInterceptor.ɵprov = i0.ɵɵdefineInjectable({
      token: ErrorHandlerInterceptor,
      factory: ErrorHandlerInterceptor.ɵfac,
      providedIn: 'root'
    });

    (function () {
      i0.ɵsetClassMetadata(ErrorHandlerInterceptor, [{
        type: core_1.Injectable,
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@core/index.ts":
  /*!********************************************!*\
    !*** ./apps/client/src/app/@core/index.ts ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppCoreIndexTs(module, exports, __webpack_require__) {
    "use strict";

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./core.module */
    "./apps/client/src/app/@core/core.module.ts"));

    __export(__webpack_require__(
    /*! ./http/api-prefix.interceptor */
    "./apps/client/src/app/@core/http/api-prefix.interceptor.ts"));

    __export(__webpack_require__(
    /*! ./http/error-handler.interceptor */
    "./apps/client/src/app/@core/http/error-handler.interceptor.ts"));

    __export(__webpack_require__(
    /*! ./route-reusable-strategy */
    "./apps/client/src/app/@core/route-reusable-strategy.ts"));

    __export(__webpack_require__(
    /*! ./logger.service */
    "./apps/client/src/app/@core/logger.service.ts"));

    __export(__webpack_require__(
    /*! ./until-destroyed */
    "./apps/client/src/app/@core/until-destroyed.ts"));
    /***/

  },

  /***/
  "./apps/client/src/app/@core/logger.service.ts":
  /*!*****************************************************!*\
    !*** ./apps/client/src/app/@core/logger.service.ts ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppCoreLoggerServiceTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LogLevel;

    (function (LogLevel) {
      LogLevel[LogLevel["Off"] = 0] = "Off";
      LogLevel[LogLevel["Error"] = 1] = "Error";
      LogLevel[LogLevel["Warning"] = 2] = "Warning";
      LogLevel[LogLevel["Info"] = 3] = "Info";
      LogLevel[LogLevel["Debug"] = 4] = "Debug";
    })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));

    var Logger = /*#__PURE__*/function () {
      function Logger(source) {
        _classCallCheck(this, Logger);

        this.source = source;
      }

      _createClass(Logger, [{
        key: "debug",
        value: function debug() {
          for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
            objects[_key] = arguments[_key];
          }

          this.log(console.log, LogLevel.Debug, objects);
        }
      }, {
        key: "info",
        value: function info() {
          for (var _len2 = arguments.length, objects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            objects[_key2] = arguments[_key2];
          }

          this.log(console.info, LogLevel.Info, objects);
        }
      }, {
        key: "warn",
        value: function warn() {
          for (var _len3 = arguments.length, objects = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            objects[_key3] = arguments[_key3];
          }

          this.log(console.warn, LogLevel.Warning, objects);
        }
      }, {
        key: "error",
        value: function error() {
          for (var _len4 = arguments.length, objects = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            objects[_key4] = arguments[_key4];
          }

          this.log(console.error, LogLevel.Error, objects);
        }
      }, {
        key: "log",
        value: function log(func, level, objects) {
          var _this = this;

          if (level <= Logger.level) {
            var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(function (output) {
              return output.apply(output, [_this.source, level].concat(_toConsumableArray(objects)));
            });
          }
        }
      }], [{
        key: "enableProductionMode",
        value: function enableProductionMode() {
          Logger.level = LogLevel.Warning;
        }
      }]);

      return Logger;
    }();

    exports.Logger = Logger;
    Logger.level = LogLevel.Debug;
    Logger.outputs = [];
    /***/
  },

  /***/
  "./apps/client/src/app/@core/route-reusable-strategy.ts":
  /*!**************************************************************!*\
    !*** ./apps/client/src/app/@core/route-reusable-strategy.ts ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppCoreRouteReusableStrategyTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RouteReusableStrategy = /*#__PURE__*/function (_router_1$RouteReuseS) {
      _inherits(RouteReusableStrategy, _router_1$RouteReuseS);

      var _super = _createSuper(RouteReusableStrategy);

      function RouteReusableStrategy() {
        _classCallCheck(this, RouteReusableStrategy);

        return _super.apply(this, arguments);
      }

      _createClass(RouteReusableStrategy, [{
        key: "shouldDetach",
        value: function shouldDetach(route) {
          return false;
        }
      }, {
        key: "store",
        value: function store(route, detachedTree) {}
      }, {
        key: "shouldAttach",
        value: function shouldAttach(route) {
          return false;
        }
      }, {
        key: "retrieve",
        value: function retrieve(route) {
          return null;
        }
      }, {
        key: "shouldReuseRoute",
        value: function shouldReuseRoute(future, curr) {
          return future.routeConfig === curr.routeConfig || future.data.reuse;
        }
      }]);

      return RouteReusableStrategy;
    }(router_1.RouteReuseStrategy);

    exports.RouteReusableStrategy = RouteReusableStrategy;

    RouteReusableStrategy.ɵfac = function RouteReusableStrategy_Factory(t) {
      return ɵRouteReusableStrategy_BaseFactory(t || RouteReusableStrategy);
    };

    RouteReusableStrategy.ɵprov = i0.ɵɵdefineInjectable({
      token: RouteReusableStrategy,
      factory: RouteReusableStrategy.ɵfac
    });
    var ɵRouteReusableStrategy_BaseFactory = i0.ɵɵgetInheritedFactory(RouteReusableStrategy);

    (function () {
      i0.ɵsetClassMetadata(RouteReusableStrategy, [{
        type: core_1.Injectable
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@core/services/api.service.ts":
  /*!***********************************************************!*\
    !*** ./apps/client/src/app/@core/services/api.service.ts ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppCoreServicesApiServiceTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var operators_1 = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var rxjs_1 = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var http_1 = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    exports.API_BASE_URL = new core_1.InjectionToken('API_BASE_URL');

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http, baseUrl) {
        _classCallCheck(this, ApiService);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
      }

      _createClass(ApiService, [{
        key: "getAllMenu",
        value: function getAllMenu() {
          var _this2 = this;

          var url_ = this.baseUrl + "/v1/menu";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(operators_1.mergeMap(function (response_) {
            return _this2.processGetAllMenu(response_);
          })).pipe(operators_1.catchError(function (response_) {
            if (response_ instanceof http_1.HttpResponseBase) {
              try {
                return _this2.processGetAllMenu(response_);
              } catch (e) {
                return rxjs_1.throwError(e);
              }
            } else return rxjs_1.throwError(response_);
          }));
        }
      }, {
        key: "processGetAllMenu",
        value: function processGetAllMenu(response) {
          var _this3 = this;

          var status = response.status;
          var responseBlob = response instanceof http_1.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator2 = _createForOfIteratorHelper(response.headers.keys()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var key = _step2.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this3.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator3 = _createForOfIteratorHelper(resultData200),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var item = _step3.value;
                    result200.push(MenuEntity.fromJS(item));
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }

              return rxjs_1.of(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Bad request.", status, _responseText, _headers);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Forbidden.", status, _responseText, _headers);
            }));
          } else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Server error.", status, _responseText, _headers);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return rxjs_1.of(null);
        }
      }, {
        key: "createMenu",
        value: function createMenu(body) {
          var _this4 = this;

          var url_ = this.baseUrl + "/v1/menu";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
              "Content-Type": "application/json",
              "Accept": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(operators_1.mergeMap(function (response_) {
            return _this4.processCreateMenu(response_);
          })).pipe(operators_1.catchError(function (response_) {
            if (response_ instanceof http_1.HttpResponseBase) {
              try {
                return _this4.processCreateMenu(response_);
              } catch (e) {
                return rxjs_1.throwError(e);
              }
            } else return rxjs_1.throwError(response_);
          }));
        }
      }, {
        key: "processCreateMenu",
        value: function processCreateMenu(response) {
          var _this5 = this;

          var status = response.status;
          var responseBlob = response instanceof http_1.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator4 = _createForOfIteratorHelper(response.headers.keys()),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var key = _step4.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }

          if (status === 201) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              var result201 = null;
              var resultData201 = _responseText === "" ? null : JSON.parse(_responseText, _this5.jsonParseReviver);
              result201 = MenuEntity.fromJS(resultData201);
              return rxjs_1.of(result201);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Bad request.", status, _responseText, _headers);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Forbidden.", status, _responseText, _headers);
            }));
          } else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Server error.", status, _responseText, _headers);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return rxjs_1.of(null);
        }
      }, {
        key: "updateMenu",
        value: function updateMenu(body) {
          var _this6 = this;

          var url_ = this.baseUrl + "/v1/menu";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
              "Content-Type": "application/json",
              "Accept": "application/json"
            })
          };
          return this.http.request("put", url_, options_).pipe(operators_1.mergeMap(function (response_) {
            return _this6.processUpdateMenu(response_);
          })).pipe(operators_1.catchError(function (response_) {
            if (response_ instanceof http_1.HttpResponseBase) {
              try {
                return _this6.processUpdateMenu(response_);
              } catch (e) {
                return rxjs_1.throwError(e);
              }
            } else return rxjs_1.throwError(response_);
          }));
        }
      }, {
        key: "processUpdateMenu",
        value: function processUpdateMenu(response) {
          var _this7 = this;

          var status = response.status;
          var responseBlob = response instanceof http_1.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator5 = _createForOfIteratorHelper(response.headers.keys()),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var key = _step5.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this7.jsonParseReviver);
              result200 = resultData200 !== undefined ? resultData200 : null;
              return rxjs_1.of(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Bad request.", status, _responseText, _headers);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Forbidden.", status, _responseText, _headers);
            }));
          } else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Server error.", status, _responseText, _headers);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return rxjs_1.of(null);
        }
      }, {
        key: "seedMenu",
        value: function seedMenu() {
          var _this8 = this;

          var url_ = this.baseUrl + "/v1/menu/seed";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(operators_1.mergeMap(function (response_) {
            return _this8.processSeedMenu(response_);
          })).pipe(operators_1.catchError(function (response_) {
            if (response_ instanceof http_1.HttpResponseBase) {
              try {
                return _this8.processSeedMenu(response_);
              } catch (e) {
                return rxjs_1.throwError(e);
              }
            } else return rxjs_1.throwError(response_);
          }));
        }
      }, {
        key: "processSeedMenu",
        value: function processSeedMenu(response) {
          var _this9 = this;

          var status = response.status;
          var responseBlob = response instanceof http_1.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator6 = _createForOfIteratorHelper(response.headers.keys()),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var key = _step6.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this9.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator7 = _createForOfIteratorHelper(resultData200),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var item = _step7.value;
                    result200.push(MenuEntity.fromJS(item));
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }

              return rxjs_1.of(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Bad request.", status, _responseText, _headers);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Forbidden.", status, _responseText, _headers);
            }));
          } else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Server error.", status, _responseText, _headers);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return rxjs_1.of(null);
        }
      }, {
        key: "createManyMenu",
        value: function createManyMenu(body) {
          var _this10 = this;

          var url_ = this.baseUrl + "/v1/menu/many";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
              "Content-Type": "application/json",
              "Accept": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(operators_1.mergeMap(function (response_) {
            return _this10.processCreateManyMenu(response_);
          })).pipe(operators_1.catchError(function (response_) {
            if (response_ instanceof http_1.HttpResponseBase) {
              try {
                return _this10.processCreateManyMenu(response_);
              } catch (e) {
                return rxjs_1.throwError(e);
              }
            } else return rxjs_1.throwError(response_);
          }));
        }
      }, {
        key: "processCreateManyMenu",
        value: function processCreateManyMenu(response) {
          var _this11 = this;

          var status = response.status;
          var responseBlob = response instanceof http_1.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator8 = _createForOfIteratorHelper(response.headers.keys()),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var key = _step8.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }

          if (status === 201) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              var result201 = null;
              var resultData201 = _responseText === "" ? null : JSON.parse(_responseText, _this11.jsonParseReviver);

              if (Array.isArray(resultData201)) {
                result201 = [];

                var _iterator9 = _createForOfIteratorHelper(resultData201),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var item = _step9.value;
                    result201.push(MenuEntity.fromJS(item));
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
              }

              return rxjs_1.of(result201);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Bad request.", status, _responseText, _headers);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Forbidden.", status, _responseText, _headers);
            }));
          } else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Server error.", status, _responseText, _headers);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return rxjs_1.of(null);
        }
      }, {
        key: "deleteMenu",
        value: function deleteMenu(id) {
          var _this12 = this;

          var url_ = this.baseUrl + "/v1/menu/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
              "Accept": "application/json"
            })
          };
          return this.http.request("delete", url_, options_).pipe(operators_1.mergeMap(function (response_) {
            return _this12.processDeleteMenu(response_);
          })).pipe(operators_1.catchError(function (response_) {
            if (response_ instanceof http_1.HttpResponseBase) {
              try {
                return _this12.processDeleteMenu(response_);
              } catch (e) {
                return rxjs_1.throwError(e);
              }
            } else return rxjs_1.throwError(response_);
          }));
        }
      }, {
        key: "processDeleteMenu",
        value: function processDeleteMenu(response) {
          var _this13 = this;

          var status = response.status;
          var responseBlob = response instanceof http_1.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator10 = _createForOfIteratorHelper(response.headers.keys()),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var key = _step10.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this13.jsonParseReviver);
              result200 = resultData200 !== undefined ? resultData200 : null;
              return rxjs_1.of(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Bad request.", status, _responseText, _headers);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Forbidden.", status, _responseText, _headers);
            }));
          } else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Server error.", status, _responseText, _headers);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return rxjs_1.of(null);
        }
      }, {
        key: "getMenuById",
        value: function getMenuById(id) {
          var _this14 = this;

          var url_ = this.baseUrl + "/v1/menu/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(operators_1.mergeMap(function (response_) {
            return _this14.processGetMenuById(response_);
          })).pipe(operators_1.catchError(function (response_) {
            if (response_ instanceof http_1.HttpResponseBase) {
              try {
                return _this14.processGetMenuById(response_);
              } catch (e) {
                return rxjs_1.throwError(e);
              }
            } else return rxjs_1.throwError(response_);
          }));
        }
      }, {
        key: "processGetMenuById",
        value: function processGetMenuById(response) {
          var _this15 = this;

          var status = response.status;
          var responseBlob = response instanceof http_1.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator11 = _createForOfIteratorHelper(response.headers.keys()),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var key = _step11.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this15.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator12 = _createForOfIteratorHelper(resultData200),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var item = _step12.value;
                    result200.push(MenuEntity.fromJS(item));
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }
              }

              return rxjs_1.of(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Bad request.", status, _responseText, _headers);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Forbidden.", status, _responseText, _headers);
            }));
          } else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Server error.", status, _responseText, _headers);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return rxjs_1.of(null);
        }
      }, {
        key: "getContacts",
        value: function getContacts() {
          var _this16 = this;

          var url_ = this.baseUrl + "/v1/contacts";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(operators_1.mergeMap(function (response_) {
            return _this16.processGetContacts(response_);
          })).pipe(operators_1.catchError(function (response_) {
            if (response_ instanceof http_1.HttpResponseBase) {
              try {
                return _this16.processGetContacts(response_);
              } catch (e) {
                return rxjs_1.throwError(e);
              }
            } else return rxjs_1.throwError(response_);
          }));
        }
      }, {
        key: "processGetContacts",
        value: function processGetContacts(response) {
          var _this17 = this;

          var status = response.status;
          var responseBlob = response instanceof http_1.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator13 = _createForOfIteratorHelper(response.headers.keys()),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var key = _step13.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this17.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator14 = _createForOfIteratorHelper(resultData200),
                    _step14;

                try {
                  for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                    var item = _step14.value;
                    result200.push(ContactEntity.fromJS(item));
                  }
                } catch (err) {
                  _iterator14.e(err);
                } finally {
                  _iterator14.f();
                }
              }

              return rxjs_1.of(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Bad request.", status, _responseText, _headers);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Forbidden.", status, _responseText, _headers);
            }));
          } else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Server error.", status, _responseText, _headers);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return rxjs_1.of(null);
        }
      }, {
        key: "getContactById",
        value: function getContactById(id) {
          var _this18 = this;

          var url_ = this.baseUrl + "/v1/contacts/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(operators_1.mergeMap(function (response_) {
            return _this18.processGetContactById(response_);
          })).pipe(operators_1.catchError(function (response_) {
            if (response_ instanceof http_1.HttpResponseBase) {
              try {
                return _this18.processGetContactById(response_);
              } catch (e) {
                return rxjs_1.throwError(e);
              }
            } else return rxjs_1.throwError(response_);
          }));
        }
      }, {
        key: "processGetContactById",
        value: function processGetContactById(response) {
          var _this19 = this;

          var status = response.status;
          var responseBlob = response instanceof http_1.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator15 = _createForOfIteratorHelper(response.headers.keys()),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var key = _step15.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this19.jsonParseReviver);
              result200 = ContactEntity.fromJS(resultData200);
              return rxjs_1.of(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Bad request.", status, _responseText, _headers);
            }));
          } else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Forbidden.", status, _responseText, _headers);
            }));
          } else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("Server error.", status, _responseText, _headers);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return rxjs_1.of(null);
        }
      }]);

      return ApiService;
    }();

    exports.ApiService = ApiService;

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(i0.ɵɵinject(http_1.HttpClient), i0.ɵɵinject(exports.API_BASE_URL, 8));
    };

    ApiService.ɵprov = i0.ɵɵdefineInjectable({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });

    (function () {
      i0.ɵsetClassMetadata(ApiService, [{
        type: core_1.Injectable,
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: i1.HttpClient,
          decorators: [{
            type: core_1.Inject,
            args: [http_1.HttpClient]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: core_1.Optional
          }, {
            type: core_1.Inject,
            args: [exports.API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var MenuEntity = /*#__PURE__*/function () {
      function MenuEntity(data) {
        _classCallCheck(this, MenuEntity);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(MenuEntity, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
            this.module = _data["module"];
            this.icon = _data["icon"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["id"] = this.id;
          data["title"] = this.title;
          data["module"] = this.module;
          data["icon"] = this.icon;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new MenuEntity();
          result.init(data);
          return result;
        }
      }]);

      return MenuEntity;
    }();

    exports.MenuEntity = MenuEntity;

    var ContactEntity = /*#__PURE__*/function () {
      function ContactEntity(data) {
        _classCallCheck(this, ContactEntity);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ContactEntity, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.id = _data["id"];
            this.createdAt = _data["createdAt"];
            this.name = _data["name"];
            this.avatar = _data["avatar"];
            this.position = _data["position"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["id"] = this.id;
          data["createdAt"] = this.createdAt;
          data["name"] = this.name;
          data["avatar"] = this.avatar;
          data["position"] = this.position;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ContactEntity();
          result.init(data);
          return result;
        }
      }]);

      return ContactEntity;
    }();

    exports.ContactEntity = ContactEntity;

    var SwaggerException = /*#__PURE__*/function (_Error) {
      _inherits(SwaggerException, _Error);

      var _super2 = _createSuper(SwaggerException);

      function SwaggerException(message, status, response, headers, result) {
        var _this20;

        _classCallCheck(this, SwaggerException);

        _this20 = _super2.call(this);
        _this20.isSwaggerException = true;
        _this20.message = message;
        _this20.status = status;
        _this20.response = response;
        _this20.headers = headers;
        _this20.result = result;
        return _this20;
      }

      _createClass(SwaggerException, null, [{
        key: "isSwaggerException",
        value: function isSwaggerException(obj) {
          return obj.isSwaggerException === true;
        }
      }]);

      return SwaggerException;
    }( /*#__PURE__*/_wrapNativeSuper(Error));

    exports.SwaggerException = SwaggerException;

    function throwException(message, status, response, headers, result) {
      if (result !== null && result !== undefined) return rxjs_1.throwError(result);else return rxjs_1.throwError(new SwaggerException(message, status, response, headers, null));
    }

    function blobToText(blob) {
      return new rxjs_1.Observable(function (observer) {
        if (!blob) {
          observer.next("");
          observer.complete();
        } else {
          var reader = new FileReader();

          reader.onload = function (event) {
            observer.next(event.target.result);
            observer.complete();
          };

          reader.readAsText(blob);
        }
      });
    }
    /***/

  },

  /***/
  "./apps/client/src/app/@core/services/config.service.ts":
  /*!**************************************************************!*\
    !*** ./apps/client/src/app/@core/services/config.service.ts ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppCoreServicesConfigServiceTs(module, exports, __webpack_require__) {
    "use strict";

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ramda_1 = __webpack_require__(
    /*! ramda */
    "./node_modules/ramda/es/index.js");

    var logger_service_1 = __webpack_require__(
    /*! ../logger.service */
    "./apps/client/src/app/@core/logger.service.ts");

    var api_service_1 = __webpack_require__(
    /*! ./api.service */
    "./apps/client/src/app/@core/services/api.service.ts");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! ./api.service */
    "./apps/client/src/app/@core/services/api.service.ts");

    var log = new logger_service_1.Logger('ConfigService');

    var ConfigService = /*#__PURE__*/function () {
      function ConfigService(apiService) {
        _classCallCheck(this, ConfigService);

        this.apiService = apiService;
        log.debug('[constructor]');
      }

      _createClass(ConfigService, [{
        key: "load",
        value: function load() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var menus;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    log.debug('[load]');
                    _context2.next = 3;
                    return this.apiService.getAllMenu().toPromise();

                  case 3:
                    menus = _context2.sent;

                    if (!ramda_1.isEmpty(menus)) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 7;
                    return this.apiService.createManyMenu([{
                      title: 'Avatar',
                      icon: 'k-i-user',
                      module: 'avatar'
                    }, {
                      title: 'Card',
                      icon: 'k-i-image',
                      module: 'card'
                    }, {
                      title: 'PanelBar',
                      icon: 'k-i-menu',
                      module: 'panel-bar'
                    }, {
                      title: 'Splitter',
                      icon: 'k-i-arrows-resizing',
                      module: 'splitter'
                    }, {
                      title: 'Stepper',
                      icon: 'k-i-list-numbered',
                      module: 'stepper'
                    }]).toPromise();

                  case 7:
                    return _context2.abrupt("return", Promise.resolve(true));

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ConfigService;
    }();

    exports.ConfigService = ConfigService;

    ConfigService.ɵfac = function ConfigService_Factory(t) {
      return new (t || ConfigService)(i0.ɵɵinject(i1.ApiService));
    };

    ConfigService.ɵprov = i0.ɵɵdefineInjectable({
      token: ConfigService,
      factory: ConfigService.ɵfac,
      providedIn: 'root'
    });

    (function () {
      i0.ɵsetClassMetadata(ConfigService, [{
        type: core_1.Injectable,
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: i1.ApiService
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@core/services/core.service.ts":
  /*!************************************************************!*\
    !*** ./apps/client/src/app/@core/services/core.service.ts ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppCoreServicesCoreServiceTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CoreService = function CoreService() {
      _classCallCheck(this, CoreService);
    };

    exports.CoreService = CoreService;

    CoreService.ɵfac = function CoreService_Factory(t) {
      return new (t || CoreService)();
    };

    CoreService.ɵprov = i0.ɵɵdefineInjectable({
      token: CoreService,
      factory: CoreService.ɵfac,
      providedIn: 'root'
    });

    (function () {
      i0.ɵsetClassMetadata(CoreService, [{
        type: core_1.Injectable,
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@core/until-destroyed.ts":
  /*!******************************************************!*\
    !*** ./apps/client/src/app/@core/until-destroyed.ts ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppCoreUntilDestroyedTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var rxjs_1 = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var operators_1 = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var untilDestroyedSymbol = Symbol('untilDestroyed');

    function untilDestroyed(instance) {
      var destroyMethodName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ngOnDestroy';
      return function (source) {
        var originalDestroy = instance[destroyMethodName];
        var hasDestroyFunction = typeof originalDestroy === 'function';

        if (!hasDestroyFunction) {
          throw new Error("".concat(instance.constructor.name, " is using untilDestroyed but doesn't implement ").concat(destroyMethodName));
        }

        if (!instance[untilDestroyedSymbol]) {
          instance[untilDestroyedSymbol] = new rxjs_1.Subject();

          instance[destroyMethodName] = function () {
            if (hasDestroyFunction) {
              originalDestroy.apply(this, arguments);
            }

            instance[untilDestroyedSymbol].next();
            instance[untilDestroyedSymbol].complete();
          };
        }

        return source.pipe(operators_1.takeUntil(instance[untilDestroyedSymbol]));
      };
    }

    exports.untilDestroyed = untilDestroyed;
    /***/
  },

  /***/
  "./apps/client/src/app/@modules/avatar/avatar.component.ts":
  /*!*****************************************************************!*\
    !*** ./apps/client/src/app/@modules/avatar/avatar.component.ts ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesAvatarAvatarComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var api_service_1 = __webpack_require__(
    /*! ../../@core/services/api.service */
    "./apps/client/src/app/@core/services/api.service.ts");

    var ramda_1 = __webpack_require__(
    /*! ramda */
    "./node_modules/ramda/es/index.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! ../../@core/services/api.service */
    "./apps/client/src/app/@core/services/api.service.ts");

    var i2 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var i3 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    function AvatarComponent_div_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 4);
        i0.ɵɵtext(1, "\n    ");
        i0.ɵɵelementStart(2, "div", 5);
        i0.ɵɵtext(3, "\n      ");
        i0.ɵɵelement(4, "kendo-avatar", 6);
        i0.ɵɵtext(5, "\n      ");
        i0.ɵɵelementStart(6, "div");
        i0.ɵɵtext(7, "\n        ");
        i0.ɵɵelementStart(8, "h2");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(10, "\n        ");
        i0.ɵɵelementStart(11, "p");
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(13, "\n      ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(14, "\n    ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(15, "\n  ");
        i0.ɵɵelementEnd();
      }

      if (rf & 2) {
        var contact_r2 = ctx.$implicit;
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("shape", "circle")("imageSrc", contact_r2.avatar);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(contact_r2.name);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(contact_r2.position);
      }
    }

    function AvatarComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 1);
        i0.ɵɵtext(1, "\n  ");
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3, "Contacts");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(4, "\n  ");
        i0.ɵɵtemplate(5, AvatarComponent_div_0_div_5_Template, 16, 4, "div", 3);
        i0.ɵɵtext(6, "\n");
        i0.ɵɵelementEnd();
      }

      if (rf & 2) {
        var ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx_r0.contacts);
      }
    }

    var AvatarComponent = /*#__PURE__*/function () {
      function AvatarComponent(apiService) {
        _classCallCheck(this, AvatarComponent);

        this.apiService = apiService;
      }

      _createClass(AvatarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var response;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.apiService.getContacts().toPromise();

                  case 2:
                    response = _context3.sent;

                    if (!ramda_1.isEmpty(response)) {
                      this.contacts = response;
                    }

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return AvatarComponent;
    }();

    exports.AvatarComponent = AvatarComponent;

    AvatarComponent.ɵfac = function AvatarComponent_Factory(t) {
      return new (t || AvatarComponent)(i0.ɵɵdirectiveInject(i1.ApiService));
    };

    AvatarComponent.ɵcmp = i0.ɵɵdefineComponent({
      type: AvatarComponent,
      selectors: [["app-avatar"]],
      decls: 2,
      vars: 1,
      consts: [["class", "list", 4, "ngIf"], [1, "list"], [1, "contact-list"], ["class", "contact", 4, "ngFor", "ngForOf"], [1, "contact"], [1, "k-hbox"], [3, "shape", "imageSrc"]],
      template: function AvatarComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵtemplate(0, AvatarComponent_div_0_Template, 7, 1, "div", 0);
          i0.ɵɵtext(1, "\n");
        }

        if (rf & 2) {
          i0.ɵɵproperty("ngIf", ctx.contacts);
        }
      },
      directives: [i2.NgIf, i2.NgForOf, i3.AvatarComponent],
      styles: [".contact[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  margin-bottom: 4px;\n  box-shadow: 0 1px 2px #ccc;\n}\n\n.contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  font-weight: normal;\n  margin: 0;\n}\n\n.contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8em;\n}\n\n.mate-info[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.list[_ngcontent-%COMP%] {\n  width: 280px;\n  margin: auto;\n  padding: 4px 10px;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08);\n}\n\n.contact-list[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXN0YWZhc2VycGVrL0dpdGh1Yi9keW5hbWljLW1lbnUtbW9kdWxlLWxvYWRlci9hcHBzL2NsaWVudC9zcmMvYXBwL0Btb2R1bGVzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJhcHBzL2NsaWVudC9zcmMvYXBwL0Btb2R1bGVzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnSEFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FGIiwiZmlsZSI6ImFwcHMvY2xpZW50L3NyYy9hcHAvQG1vZHVsZXMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhY3Qge1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggI2NjYztcbn1cblxuLmNvbnRhY3QgaDIge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDA7XG59XG5cbi5jb250YWN0IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5tYXRlLWluZm8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5saXN0IHtcbiAgd2lkdGg6IDI4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4uY29udGFjdC1saXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiIsIi5jb250YWN0IHtcbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4ICNjY2M7XG59XG5cbi5jb250YWN0IGgyIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFjdCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ubWF0ZS1pbmZvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubGlzdCB7XG4gIHdpZHRoOiAyODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLmNvbnRhY3QtbGlzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"]
    });

    (function () {
      i0.ɵsetClassMetadata(AvatarComponent, [{
        type: core_1.Component,
        args: [{
          selector: 'app-avatar',
          templateUrl: './avatar.component.html',
          styleUrls: ['./avatar.component.scss']
        }]
      }], function () {
        return [{
          type: i1.ApiService
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@modules/avatar/avatar.module.ts":
  /*!**************************************************************!*\
    !*** ./apps/client/src/app/@modules/avatar/avatar.module.ts ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesAvatarAvatarModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var avatar_component_1 = __webpack_require__(
    /*! ./avatar.component */
    "./apps/client/src/app/@modules/avatar/avatar.component.ts");

    var kendo_angular_layout_1 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AvatarModule = function AvatarModule() {
      _classCallCheck(this, AvatarModule);
    };

    exports.AvatarModule = AvatarModule;
    AvatarModule.entry = avatar_component_1.AvatarComponent;
    AvatarModule.ɵmod = i0.ɵɵdefineNgModule({
      type: AvatarModule
    });
    AvatarModule.ɵinj = i0.ɵɵdefineInjector({
      factory: function AvatarModule_Factory(t) {
        return new (t || AvatarModule)();
      },
      imports: [[common_1.CommonModule, kendo_angular_layout_1.LayoutModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AvatarModule, {
        declarations: [avatar_component_1.AvatarComponent],
        imports: [common_1.CommonModule, kendo_angular_layout_1.LayoutModule]
      });
    })();

    (function () {
      i0.ɵsetClassMetadata(AvatarModule, [{
        type: core_1.NgModule,
        args: [{
          imports: [common_1.CommonModule, kendo_angular_layout_1.LayoutModule],
          declarations: [avatar_component_1.AvatarComponent]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@modules/card/card.component.ts":
  /*!*************************************************************!*\
    !*** ./apps/client/src/app/@modules/card/card.component.ts ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesCardCardComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var i2 = __webpack_require__(
    /*! ./scroll-view-card/scroll-view-card.component */
    "./apps/client/src/app/@modules/card/scroll-view-card/scroll-view-card.component.ts");

    function CardsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtext(1, "\n    ");
        i0.ɵɵelement(2, "scrollview-card", 2);
        i0.ɵɵtext(3, "\n  ");
        i0.ɵɵelementEnd();
      }

      if (rf & 2) {
        var card_r1 = ctx.$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("card", card_r1);
      }
    }

    var CardsComponent = function CardsComponent() {
      _classCallCheck(this, CardsComponent);

      this.scrollViewCards = [{
        "thumbnailSrc": "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg",
        "headerTitle": "bg_traditions",
        "headerSubtitle": "Bulgaria, Europe",
        "commentsExpanded": false,
        "postLiked": false,
        "comments": [],
        "postLikes": 674,
        "newCommentTextValue": "",
        "scrollViewItems": [{
          "url": "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/kukeri.jpg"
        }, {
          "url": "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/martenitsa.jpg"
        }, {
          "url": "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg"
        }]
      }, {
        thumbnailSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila_lakes.jpg',
        headerTitle: 'bg_mountains',
        headerSubtitle: 'Bulgaria, Europe',
        commentsExpanded: false,
        postLiked: false,
        comments: [],
        newCommentTextValue: '',
        postLikes: 962,
        scrollViewItems: [{
          url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg'
        }, {
          url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/pamporovo.jpg'
        }, {
          url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/camping.jpg'
        }]
      }];
    };

    exports.CardsComponent = CardsComponent;

    CardsComponent.ɵfac = function CardsComponent_Factory(t) {
      return new (t || CardsComponent)();
    };

    CardsComponent.ɵcmp = i0.ɵɵdefineComponent({
      type: CardsComponent,
      selectors: [["app-card"]],
      decls: 5,
      vars: 1,
      consts: [[1, "card-list"], [4, "ngFor", "ngForOf"], [3, "card"]],
      template: function CardsComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 0);
          i0.ɵɵtext(1, "\n  ");
          i0.ɵɵtemplate(2, CardsComponent_div_2_Template, 4, 1, "div", 1);
          i0.ɵɵtext(3, "\n");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(4, "\n");
        }

        if (rf & 2) {
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngForOf", ctx.scrollViewCards);
        }
      },
      directives: [i1.NgForOf, i2.ScrollViewCardComponent],
      styles: [".card-list {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n\n.k-textarea {\n  resize: none;\n}\n\n.comment-box {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-comment-wrapper .box {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-post-comment-wrapper {\n  padding: 16px 16px 0;\n}\n\n.card-comment-wrapper {\n  margin-bottom: 8px;\n  padding: 0 16px;\n}\n\n.card-comment-container {\n  padding: 4px 0;\n  align-items: center;\n  display: flex;\n}\n\n.comment-box .comment-text {\n  font-size: 13px;\n  font-weight: bold;\n  max-width: 100px;\n}\n\n.comment-box span {\n  font-size: 10px;\n  font-weight: normal;\n  word-break: break-all;\n}\n\n.time span {\n  margin-left: 8px;\n}\n\n.box .k-button-icon {\n  font-size: 16px;\n  align-self: center;\n}\n\n.post-likes-count {\n  font-size: 13px;\n  align-self: center;\n  color: #656565;\n}\n\n.k-button.k-flat:focus::after {\n  display: none;\n}\n\n.k-button {\n  outline: none;\n}\n\n.k-button .k-i-heart {\n  color: #ff6358;\n}\n\n.k-card-subtitle .k-icon {\n  vertical-align: baseline;\n  font-size: 12px;\n}\n\n.k-card-header .k-card-title + .k-card-subtitle {\n  margin-top: 0;\n}\n\n.k-card-title {\n  margin-bottom: 4px;\n}\n\n.k-card-media li img {\n  width: 285px;\n}\n\ncomment-actions {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.k-card-action {\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXN0YWZhc2VycGVrL0dpdGh1Yi9keW5hbWljLW1lbnUtbW9kdWxlLWxvYWRlci9hcHBzL2NsaWVudC9zcmMvYXBwL0Btb2R1bGVzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsImFwcHMvY2xpZW50L3NyYy9hcHAvQG1vZHVsZXMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGIiwiZmlsZSI6ImFwcHMvY2xpZW50L3NyYy9hcHAvQG1vZHVsZXMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmstdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5jb21tZW50LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jYXJkLWNvbW1lbnQtd3JhcHBlciAuYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZC1wb3N0LWNvbW1lbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAwO1xufVxuXG4uY2FyZC1jb21tZW50LXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLmNhcmQtY29tbWVudC1jb250YWluZXIge1xuICBwYWRkaW5nOiA0cHggMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbW1lbnQtYm94IC5jb21tZW50LXRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4uY29tbWVudC1ib3ggc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4udGltZSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmJveCAuay1idXR0b24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ucG9zdC1saWtlcy1jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLmstYnV0dG9uLmstZmxhdDpmb2N1czo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uay1idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uay1idXR0b24gLmstaS1oZWFydCB7XG4gIGNvbG9yOiAjZmY2MzU4O1xufVxuXG4uay1jYXJkLXN1YnRpdGxlIC5rLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmstY2FyZC1oZWFkZXIgLmstY2FyZC10aXRsZSArIC5rLWNhcmQtc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uay1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uay1jYXJkLW1lZGlhIGxpIGltZyB7XG4gIHdpZHRoOiAyODVweDtcbn1cblxuY29tbWVudC1hY3Rpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmstY2FyZC1hY3Rpb24ge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbiIsIi5jYXJkLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uay10ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLmNvbW1lbnQtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNhcmQtY29tbWVudC13cmFwcGVyIC5ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYXJkLXBvc3QtY29tbWVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogMTZweCAxNnB4IDA7XG59XG5cbi5jYXJkLWNvbW1lbnQtd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4uY2FyZC1jb21tZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29tbWVudC1ib3ggLmNvbW1lbnQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5jb21tZW50LWJveCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi50aW1lIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uYm94IC5rLWJ1dHRvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5wb3N0LWxpa2VzLWNvdW50IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiAjNjU2NTY1O1xufVxuXG4uay1idXR0b24uay1mbGF0OmZvY3VzOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5rLWJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5rLWJ1dHRvbiAuay1pLWhlYXJ0IHtcbiAgY29sb3I6ICNmZjYzNTg7XG59XG5cbi5rLWNhcmQtc3VidGl0bGUgLmstaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uay1jYXJkLWhlYWRlciAuay1jYXJkLXRpdGxlICsgLmstY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5rLWNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5rLWNhcmQtbWVkaWEgbGkgaW1nIHtcbiAgd2lkdGg6IDI4NXB4O1xufVxuXG5jb21tZW50LWFjdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uay1jYXJkLWFjdGlvbiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufSJdfQ== */"],
      encapsulation: 2
    });

    (function () {
      i0.ɵsetClassMetadata(CardsComponent, [{
        type: core_1.Component,
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.scss'],
          encapsulation: core_1.ViewEncapsulation.None
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@modules/card/card.module.ts":
  /*!**********************************************************!*\
    !*** ./apps/client/src/app/@modules/card/card.module.ts ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesCardCardModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var card_component_1 = __webpack_require__(
    /*! ./card.component */
    "./apps/client/src/app/@modules/card/card.component.ts");

    var scroll_view_card_component_1 = __webpack_require__(
    /*! ./scroll-view-card/scroll-view-card.component */
    "./apps/client/src/app/@modules/card/scroll-view-card/scroll-view-card.component.ts");

    var comment_actions_component_1 = __webpack_require__(
    /*! ./comment-actions/comment-actions.component */
    "./apps/client/src/app/@modules/card/comment-actions/comment-actions.component.ts");

    var post_comment_component_1 = __webpack_require__(
    /*! ./post-comment/post-comment.component */
    "./apps/client/src/app/@modules/card/post-comment/post-comment.component.ts");

    var kendo_angular_scrollview_1 = __webpack_require__(
    /*! @progress/kendo-angular-scrollview */
    "./node_modules/@progress/kendo-angular-scrollview/__ivy_ngcc__/dist/fesm2015/index.js");

    var kendo_angular_layout_1 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardModule = function CardModule() {
      _classCallCheck(this, CardModule);
    };

    exports.CardModule = CardModule;
    CardModule.entry = card_component_1.CardsComponent;
    CardModule.ɵmod = i0.ɵɵdefineNgModule({
      type: CardModule
    });
    CardModule.ɵinj = i0.ɵɵdefineInjector({
      factory: function CardModule_Factory(t) {
        return new (t || CardModule)();
      },
      imports: [[common_1.CommonModule, kendo_angular_scrollview_1.ScrollViewModule, kendo_angular_layout_1.LayoutModule, forms_1.FormsModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CardModule, {
        declarations: [card_component_1.CardsComponent, scroll_view_card_component_1.ScrollViewCardComponent, comment_actions_component_1.CommentActionsComponent, post_comment_component_1.PostCommentComponent],
        imports: [common_1.CommonModule, kendo_angular_scrollview_1.ScrollViewModule, kendo_angular_layout_1.LayoutModule, forms_1.FormsModule]
      });
    })();

    (function () {
      i0.ɵsetClassMetadata(CardModule, [{
        type: core_1.NgModule,
        args: [{
          imports: [common_1.CommonModule, kendo_angular_scrollview_1.ScrollViewModule, kendo_angular_layout_1.LayoutModule, forms_1.FormsModule],
          declarations: [card_component_1.CardsComponent, scroll_view_card_component_1.ScrollViewCardComponent, comment_actions_component_1.CommentActionsComponent, post_comment_component_1.PostCommentComponent]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@modules/card/comment-actions/comment-actions.component.ts":
  /*!****************************************************************************************!*\
    !*** ./apps/client/src/app/@modules/card/comment-actions/comment-actions.component.ts ***!
    \****************************************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesCardCommentActionsCommentActionsComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CommentActionsComponent = /*#__PURE__*/function () {
      function CommentActionsComponent() {
        _classCallCheck(this, CommentActionsComponent);
      }

      _createClass(CommentActionsComponent, [{
        key: "commentClick",
        value: function commentClick(card) {
          card.commentsExpanded = !card.commentsExpanded;
        }
      }, {
        key: "postLikesCount",
        value: function postLikesCount(card) {
          if (card.postLiked) {
            card.postLikes -= 1;
          } else {
            card.postLikes += 1;
          }

          card.postLiked = !card.postLiked;
        }
      }, {
        key: "postHeartIcon",
        value: function postHeartIcon(card) {
          return card.postLiked ? 'k-icon k-i-heart' : 'k-icon k-i-heart-outline';
        }
      }]);

      return CommentActionsComponent;
    }();

    exports.CommentActionsComponent = CommentActionsComponent;

    CommentActionsComponent.ɵfac = function CommentActionsComponent_Factory(t) {
      return new (t || CommentActionsComponent)();
    };

    CommentActionsComponent.ɵcmp = i0.ɵɵdefineComponent({
      type: CommentActionsComponent,
      selectors: [["comment-actions"]],
      inputs: {
        card: "card"
      },
      decls: 19,
      vars: 2,
      consts: [[1, "k-button", "k-flat", 3, "click"], [3, "ngClass"], [1, "k-icon", "k-i-comment"], [1, "k-button", "k-flat"], [1, "k-icon", "k-i-share"], [1, "post-likes-count"]],
      template: function CommentActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div");
          i0.ɵɵtext(1, "\n  ");
          i0.ɵɵelementStart(2, "button", 0);
          i0.ɵɵlistener("click", function CommentActionsComponent_Template_button_click_2_listener() {
            return ctx.postLikesCount(ctx.card);
          });
          i0.ɵɵtext(3, "\n    ");
          i0.ɵɵelement(4, "span", 1);
          i0.ɵɵtext(5, "\n  ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(6, "\n  ");
          i0.ɵɵelementStart(7, "button", 0);
          i0.ɵɵlistener("click", function CommentActionsComponent_Template_button_click_7_listener() {
            return ctx.commentClick(ctx.card);
          });
          i0.ɵɵtext(8, "\n    ");
          i0.ɵɵelement(9, "span", 2);
          i0.ɵɵtext(10, "\n  ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(11, "\n  ");
          i0.ɵɵelementStart(12, "button", 3);
          i0.ɵɵelement(13, "span", 4);
          i0.ɵɵelementEnd();
          i0.ɵɵtext(14, "\n");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(15, "\n");
          i0.ɵɵelementStart(16, "span", 5);
          i0.ɵɵtext(17);
          i0.ɵɵelementEnd();
          i0.ɵɵtext(18, "\n");
        }

        if (rf & 2) {
          i0.ɵɵadvance(4);
          i0.ɵɵproperty("ngClass", ctx.postHeartIcon(ctx.card));
          i0.ɵɵadvance(13);
          i0.ɵɵtextInterpolate1("", ctx.card.postLikes, " likes");
        }
      },
      directives: [i1.NgClass],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL0Btb2R1bGVzL2NhcmQvY29tbWVudC1hY3Rpb25zL2NvbW1lbnQtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"],
      encapsulation: 2
    });

    (function () {
      i0.ɵsetClassMetadata(CommentActionsComponent, [{
        type: core_1.Component,
        args: [{
          selector: 'comment-actions',
          templateUrl: './comment-actions.component.html',
          styleUrls: ['./comment-actions.component.scss'],
          encapsulation: core_1.ViewEncapsulation.None
        }]
      }], function () {
        return [];
      }, {
        card: [{
          type: core_1.Input
        }]
      });
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@modules/card/post-comment/post-comment.component.ts":
  /*!**********************************************************************************!*\
    !*** ./apps/client/src/app/@modules/card/post-comment/post-comment.component.ts ***!
    \**********************************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesCardPostCommentPostCommentComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var i2 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var i3 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    var _c0 = function _c0() {
      return {
        color: "white"
      };
    };

    function PostCommentComponent_div_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = i0.ɵɵgetCurrentView();

        i0.ɵɵelementStart(0, "div", 6);
        i0.ɵɵtext(1, "\n      ");
        i0.ɵɵelementStart(2, "div", 7);
        i0.ɵɵtext(3, "\n        ");
        i0.ɵɵelementStart(4, "kendo-avatar", 8);
        i0.ɵɵtext(5, "\n        ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(6, "\n        ");
        i0.ɵɵelementStart(7, "div", 9);
        i0.ɵɵtext(8, "\n          ");
        i0.ɵɵelementStart(9, "span", 10);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(11, "\n          ");
        i0.ɵɵelementStart(12, "span", 11);
        i0.ɵɵtext(13, "1s ago");
        i0.ɵɵelementStart(14, "span");
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(16, "\n        ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(17, "\n      ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(18, "\n      ");
        i0.ɵɵelementStart(19, "button", 12);
        i0.ɵɵlistener("click", function PostCommentComponent_div_0_div_4_Template_button_click_19_listener() {
          i0.ɵɵrestoreView(_r4);
          var comment_r2 = ctx.$implicit;
          var ctx_r3 = i0.ɵɵnextContext(2);
          return ctx_r3.commentLikesCount(comment_r2);
        });
        i0.ɵɵtext(20, "\n        ");
        i0.ɵɵelement(21, "span", 13);
        i0.ɵɵtext(22, "\n      ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(23, "\n    ");
        i0.ɵɵelementEnd();
      }

      if (rf & 2) {
        var comment_r2 = ctx.$implicit;
        var ctx_r1 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("initials", "EG")("shape", "circle")("cssStyle", i0.ɵɵpureFunction0(6, _c0));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(comment_r2.text);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1("", comment_r2.likes, " like");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngClass", ctx_r1.commentHeartIcon(comment_r2));
      }
    }

    function PostCommentComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtext(1, "\n  ");
        i0.ɵɵelementStart(2, "div", 4);
        i0.ɵɵtext(3, "\n    ");
        i0.ɵɵtemplate(4, PostCommentComponent_div_0_div_4_Template, 24, 7, "div", 5);
        i0.ɵɵtext(5, "\n  ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(6, "\n");
        i0.ɵɵelementEnd();
      }

      if (rf & 2) {
        var ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx_r0.card.comments);
      }
    }

    var PostCommentComponent = /*#__PURE__*/function () {
      function PostCommentComponent() {
        _classCallCheck(this, PostCommentComponent);
      }

      _createClass(PostCommentComponent, [{
        key: "commentLikesCount",
        value: function commentLikesCount(comment) {
          if (comment.likes > 0) {
            comment.likes -= 1;
          } else {
            comment.likes += 1;
          }
        }
      }, {
        key: "commentHeartIcon",
        value: function commentHeartIcon(comment) {
          if (comment && comment.likes > 0) {
            return 'k-icon k-i-heart';
          } else {
            return 'k-icon k-i-heart-outline';
          }
        }
      }, {
        key: "postComment",
        value: function postComment(card) {
          if (card.newCommentTextValue) {
            var comment = {
              text: card.newCommentTextValue,
              likes: 0
            };
            card.comments.push(comment);
            card.newCommentTextValue = '';
          }
        }
      }]);

      return PostCommentComponent;
    }();

    exports.PostCommentComponent = PostCommentComponent;

    PostCommentComponent.ɵfac = function PostCommentComponent_Factory(t) {
      return new (t || PostCommentComponent)();
    };

    PostCommentComponent.ɵcmp = i0.ɵɵdefineComponent({
      type: PostCommentComponent,
      selectors: [["post-comment"]],
      inputs: {
        card: "card"
      },
      decls: 10,
      vars: 2,
      consts: [[4, "ngIf"], [1, "k-hbox", "card-post-comment-wrapper"], ["placeholder", "Comment...", 1, "k-textarea", 3, "ngModel", "ngModelChange"], [1, "k-button", "k-primary", "k-flat", 3, "click"], [1, "card-comment-wrapper"], ["class", "box", 4, "ngFor", "ngForOf"], [1, "box"], [1, "card-comment-container"], [1, "card-comment-thumbnail", 3, "initials", "shape", "cssStyle"], [1, "comment-box"], [1, "comment-text"], [1, "time"], [1, "k-button", "k-flat", 3, "click"], [3, "ngClass"]],
      template: function PostCommentComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵtemplate(0, PostCommentComponent_div_0_Template, 7, 1, "div", 0);
          i0.ɵɵtext(1, "\n");
          i0.ɵɵelementStart(2, "div", 1);
          i0.ɵɵtext(3, "\n  ");
          i0.ɵɵelementStart(4, "textarea", 2);
          i0.ɵɵlistener("ngModelChange", function PostCommentComponent_Template_textarea_ngModelChange_4_listener($event) {
            return ctx.card.newCommentTextValue = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵtext(5, "\n  ");
          i0.ɵɵelementStart(6, "button", 3);
          i0.ɵɵlistener("click", function PostCommentComponent_Template_button_click_6_listener() {
            return ctx.postComment(ctx.card);
          });
          i0.ɵɵtext(7, "Post");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(8, "\n");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(9, "\n");
        }

        if (rf & 2) {
          i0.ɵɵproperty("ngIf", ctx.card.comments.length);
          i0.ɵɵadvance(4);
          i0.ɵɵproperty("ngModel", ctx.card.newCommentTextValue);
        }
      },
      directives: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgForOf, i3.AvatarComponent, i1.NgClass],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL0Btb2R1bGVzL2NhcmQvcG9zdC1jb21tZW50L3Bvc3QtY29tbWVudC5jb21wb25lbnQuc2NzcyJ9 */"],
      encapsulation: 2
    });

    (function () {
      i0.ɵsetClassMetadata(PostCommentComponent, [{
        type: core_1.Component,
        args: [{
          selector: 'post-comment',
          templateUrl: './post-comment.component.html',
          styleUrls: ['./post-comment.component.scss'],
          encapsulation: core_1.ViewEncapsulation.None
        }]
      }], null, {
        card: [{
          type: core_1.Input
        }]
      });
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@modules/card/scroll-view-card/scroll-view-card.component.ts":
  /*!******************************************************************************************!*\
    !*** ./apps/client/src/app/@modules/card/scroll-view-card/scroll-view-card.component.ts ***!
    \******************************************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesCardScrollViewCardScrollViewCardComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    var i2 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var i3 = __webpack_require__(
    /*! ../comment-actions/comment-actions.component */
    "./apps/client/src/app/@modules/card/comment-actions/comment-actions.component.ts");

    var i4 = __webpack_require__(
    /*! @progress/kendo-angular-scrollview */
    "./node_modules/@progress/kendo-angular-scrollview/__ivy_ngcc__/dist/fesm2015/index.js");

    var i5 = __webpack_require__(
    /*! ../post-comment/post-comment.component */
    "./apps/client/src/app/@modules/card/post-comment/post-comment.component.ts");

    var _c0 = function _c0() {
      return {
        minWidth: "100%"
      };
    };

    function ScrollViewCardComponent_kendo_scrollview_16_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtext(0, "\n      ");
        i0.ɵɵelement(1, "img", 10);
        i0.ɵɵtext(2, "\n    ");
      }

      if (rf & 2) {
        var item_r4 = ctx.item;
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("src", item_r4.url, i0.ɵɵsanitizeUrl);
        i0.ɵɵpropertyInterpolate("alt", item_r4.title);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(3, _c0));
      }
    }

    function ScrollViewCardComponent_kendo_scrollview_16_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelementStart(0, "kendo-scrollview", 9);
        i0.ɵɵtext(1, "\n    ");
        i0.ɵɵtemplate(2, ScrollViewCardComponent_kendo_scrollview_16_ng_template_2_Template, 3, 4, "ng-template");
        i0.ɵɵtext(3, "\n  ");
        i0.ɵɵelementEnd();
      }

      if (rf & 2) {
        var ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("data", ctx_r0.card.scrollViewItems)("width", "100%")("height", "185px")("arrows", true)("pageable", true);
      }
    }

    function ScrollViewCardComponent_hr_23_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelement(0, "hr", 11);
      }
    }

    function ScrollViewCardComponent_kendo_card_body_25_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelementStart(0, "kendo-card-body");
        i0.ɵɵtext(1, "\n    ");
        i0.ɵɵelement(2, "post-comment", 6);
        i0.ɵɵtext(3, "\n  ");
        i0.ɵɵelementEnd();
      }

      if (rf & 2) {
        var ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("card", ctx_r2.card);
      }
    }

    var ScrollViewCardComponent = function ScrollViewCardComponent() {
      _classCallCheck(this, ScrollViewCardComponent);
    };

    exports.ScrollViewCardComponent = ScrollViewCardComponent;

    ScrollViewCardComponent.ɵfac = function ScrollViewCardComponent_Factory(t) {
      return new (t || ScrollViewCardComponent)();
    };

    ScrollViewCardComponent.ɵcmp = i0.ɵɵdefineComponent({
      type: ScrollViewCardComponent,
      selectors: [["scrollview-card"]],
      inputs: {
        card: "card"
      },
      decls: 28,
      vars: 9,
      consts: [[3, "width"], [1, "k-hbox"], ["width", "40px", "height", "40px", 3, "imageSrc", "shape"], ["kendoCardTitle", ""], ["kendoCardSubtitle", ""], ["kendoCardMedia", "", 3, "data", "width", "height", "arrows", "pageable", 4, "ngIf"], [3, "card"], ["kendoCardSeparator", "", 4, "ngIf"], [4, "ngIf"], ["kendoCardMedia", "", 3, "data", "width", "height", "arrows", "pageable"], ["draggable", "false", 3, "src", "alt", "ngStyle"], ["kendoCardSeparator", ""]],
      template: function ScrollViewCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "kendo-card", 0);
          i0.ɵɵtext(1, "\n  ");
          i0.ɵɵelementStart(2, "kendo-card-header", 1);
          i0.ɵɵtext(3, "\n    ");
          i0.ɵɵelement(4, "kendo-avatar", 2);
          i0.ɵɵtext(5, "\n    ");
          i0.ɵɵelementStart(6, "div");
          i0.ɵɵtext(7, "\n      ");
          i0.ɵɵelementStart(8, "h1", 3);
          i0.ɵɵtext(9);
          i0.ɵɵelementEnd();
          i0.ɵɵtext(10, "\n      ");
          i0.ɵɵelementStart(11, "p", 4);
          i0.ɵɵtext(12);
          i0.ɵɵelementEnd();
          i0.ɵɵtext(13, "\n    ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(14, "\n  ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(15, "\n\n  ");
          i0.ɵɵtemplate(16, ScrollViewCardComponent_kendo_scrollview_16_Template, 4, 5, "kendo-scrollview", 5);
          i0.ɵɵtext(17, "\n\n  ");
          i0.ɵɵelementStart(18, "kendo-card-actions");
          i0.ɵɵtext(19, "\n    ");
          i0.ɵɵelement(20, "comment-actions", 6);
          i0.ɵɵtext(21, "\n  ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(22, "\n\n  ");
          i0.ɵɵtemplate(23, ScrollViewCardComponent_hr_23_Template, 1, 0, "hr", 7);
          i0.ɵɵtext(24, "\n  ");
          i0.ɵɵtemplate(25, ScrollViewCardComponent_kendo_card_body_25_Template, 4, 1, "kendo-card-body", 8);
          i0.ɵɵtext(26, "\n");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(27, "\n");
        }

        if (rf & 2) {
          i0.ɵɵproperty("width", "260px");
          i0.ɵɵadvance(4);
          i0.ɵɵproperty("imageSrc", ctx.card.thumbnailSrc)("shape", "circle");
          i0.ɵɵadvance(5);
          i0.ɵɵtextInterpolate(ctx.card.headerTitle);
          i0.ɵɵadvance(3);
          i0.ɵɵtextInterpolate(ctx.card.headerSubtitle);
          i0.ɵɵadvance(4);
          i0.ɵɵproperty("ngIf", ctx.card.scrollViewItems);
          i0.ɵɵadvance(4);
          i0.ɵɵproperty("card", ctx.card);
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngIf", ctx.card.comments.length && ctx.card.commentsExpanded);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngIf", ctx.card.commentsExpanded);
        }
      },
      directives: [i1.CardComponent, i1.CardHeaderComponent, i1.AvatarComponent, i1.CardTitleDirective, i1.CardSubtitleDirective, i2.NgIf, i1.CardActionsComponent, i3.CommentActionsComponent, i4.ScrollViewComponent, i1.CardMediaDirective, i2.NgStyle, i1.CardSeparatorDirective, i1.CardBodyComponent, i5.PostCommentComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL0Btb2R1bGVzL2NhcmQvc2Nyb2xsLXZpZXctY2FyZC9zY3JvbGwtdmlldy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"],
      encapsulation: 2
    });

    (function () {
      i0.ɵsetClassMetadata(ScrollViewCardComponent, [{
        type: core_1.Component,
        args: [{
          selector: 'scrollview-card',
          templateUrl: './scroll-view-card.component.html',
          styleUrls: ['./scroll-view-card.component.scss'],
          encapsulation: core_1.ViewEncapsulation.None
        }]
      }], null, {
        card: [{
          type: core_1.Input
        }]
      });
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@modules/panel-bar/panel-bar.component.ts":
  /*!***********************************************************************!*\
    !*** ./apps/client/src/app/@modules/panel-bar/panel-bar.component.ts ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesPanelBarPanelBarComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    function PanelBarComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtext(0, "\n        ");
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵtext(2, "\n          ");
        i0.ɵɵelementStart(3, "div", 5);
        i0.ɵɵtext(4, "\n            ");
        i0.ɵɵelement(5, "img", 6);
        i0.ɵɵtext(6, "\n            ");
        i0.ɵɵelementStart(7, "span", 7);
        i0.ɵɵtext(8, "\n                                    ");
        i0.ɵɵelementStart(9, "h2");
        i0.ɵɵtext(10, "Andrew Fuller");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(11, "\n                                    ");
        i0.ɵɵelementStart(12, "p");
        i0.ɵɵtext(13, "Team Lead");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(14, "\n                                ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(15, "\n          ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(16, "\n          ");
        i0.ɵɵelementStart(17, "div", 5);
        i0.ɵɵtext(18, "\n            ");
        i0.ɵɵelement(19, "img", 8);
        i0.ɵɵtext(20, "\n            ");
        i0.ɵɵelementStart(21, "span", 7);
        i0.ɵɵtext(22, "\n                                    ");
        i0.ɵɵelementStart(23, "h2");
        i0.ɵɵtext(24, "Nancy Leverling");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(25, "\n                                    ");
        i0.ɵɵelementStart(26, "p");
        i0.ɵɵtext(27, "Sales Associate");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(28, "\n                                ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(29, "\n          ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(30, "\n          ");
        i0.ɵɵelementStart(31, "div", 5);
        i0.ɵɵtext(32, "\n            ");
        i0.ɵɵelement(33, "img", 9);
        i0.ɵɵtext(34, "\n            ");
        i0.ɵɵelementStart(35, "span", 7);
        i0.ɵɵtext(36, "\n                                    ");
        i0.ɵɵelementStart(37, "h2");
        i0.ɵɵtext(38, "Robert King");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(39, "\n                                    ");
        i0.ɵɵelementStart(40, "p");
        i0.ɵɵtext(41, "Business System Analyst");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(42, "\n                                ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(43, "\n          ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(44, "\n        ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(45, "\n      ");
      }

      if (rf & 2) {
        var ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("src", ctx_r0.imageUrl("andrew"), i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("src", ctx_r0.imageUrl("nancy"), i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("src", ctx_r0.imageUrl("robert"), i0.ɵɵsanitizeUrl);
      }
    }

    var PanelBarComponent = /*#__PURE__*/function () {
      function PanelBarComponent() {
        _classCallCheck(this, PanelBarComponent);

        this.baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';
      }

      _createClass(PanelBarComponent, [{
        key: "imageUrl",
        value: function imageUrl(imageName) {
          return this.baseImageUrl + imageName + '.jpg';
        }
      }]);

      return PanelBarComponent;
    }();

    exports.PanelBarComponent = PanelBarComponent;

    PanelBarComponent.ɵfac = function PanelBarComponent_Factory(t) {
      return new (t || PanelBarComponent)();
    };

    PanelBarComponent.ɵcmp = i0.ɵɵdefineComponent({
      type: PanelBarComponent,
      selectors: [["app-panel-bar"]],
      decls: 44,
      vars: 17,
      consts: [[1, "panelbar-wrapper"], ["expanded", "true", 3, "title"], ["kendoPanelBarContent", ""], [3, "title"], [3, "title", "disabled"], [1, "teamMate"], ["alt", "Andrew Fuller", 3, "src"], [1, "mate-info"], ["alt", "Nancy Leverling", 3, "src"], ["alt", "Robert King", 3, "src"]],
      template: function PanelBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 0);
          i0.ɵɵtext(1, "\n  ");
          i0.ɵɵelementStart(2, "kendo-panelbar");
          i0.ɵɵtext(3, "\n    ");
          i0.ɵɵelementStart(4, "kendo-panelbar-item", 1);
          i0.ɵɵtext(5, "\n      ");
          i0.ɵɵtemplate(6, PanelBarComponent_ng_template_6_Template, 46, 3, "ng-template", 2);
          i0.ɵɵtext(7, "\n    ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(8, "\n    ");
          i0.ɵɵelementStart(9, "kendo-panelbar-item", 3);
          i0.ɵɵtext(10, "\n      ");
          i0.ɵɵelement(11, "kendo-panelbar-item", 3);
          i0.ɵɵtext(12, "\n      ");
          i0.ɵɵelementStart(13, "kendo-panelbar-item", 3);
          i0.ɵɵtext(14, "\n        ");
          i0.ɵɵelement(15, "kendo-panelbar-item", 3);
          i0.ɵɵtext(16, "\n        ");
          i0.ɵɵelement(17, "kendo-panelbar-item", 3);
          i0.ɵɵtext(18, "\n        ");
          i0.ɵɵelement(19, "kendo-panelbar-item", 3);
          i0.ɵɵtext(20, "\n        ");
          i0.ɵɵelement(21, "kendo-panelbar-item", 3);
          i0.ɵɵtext(22, "\n      ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(23, "\n      ");
          i0.ɵɵelement(24, "kendo-panelbar-item", 3);
          i0.ɵɵtext(25, "\n    ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(26, "\n    ");
          i0.ɵɵelementStart(27, "kendo-panelbar-item", 3);
          i0.ɵɵtext(28, "\n      ");
          i0.ɵɵelement(29, "kendo-panelbar-item", 3);
          i0.ɵɵtext(30, "\n      ");
          i0.ɵɵelement(31, "kendo-panelbar-item", 3);
          i0.ɵɵtext(32, "\n      ");
          i0.ɵɵelement(33, "kendo-panelbar-item", 3);
          i0.ɵɵtext(34, "\n      ");
          i0.ɵɵelement(35, "kendo-panelbar-item", 3);
          i0.ɵɵtext(36, "\n      ");
          i0.ɵɵelement(37, "kendo-panelbar-item", 3);
          i0.ɵɵtext(38, "\n    ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(39, "\n    ");
          i0.ɵɵelement(40, "kendo-panelbar-item", 4);
          i0.ɵɵtext(41, "\n  ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(42, "\n");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(43, "\n");
        }

        if (rf & 2) {
          i0.ɵɵadvance(4);
          i0.ɵɵproperty("title", "My Teammates");
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("title", "Projects");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("title", "New Business Plan");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("title", "Sales Forecasts");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("title", "Q1 Forecast");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("title", "Q2 Forecast");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("title", "Q3 Forecast");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("title", "Q4 Forecast");
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("title", "Sales Reports");
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("title", "Programs");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("title", "Monday");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("title", "Tuesday");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("title", "Wednesday");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("title", "Thursday");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("title", "Friday");
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("title", "Communication")("disabled", true);
        }
      },
      directives: [i1.PanelBarComponent, i1.PanelBarItemComponent, i1.PanelBarContentDirective],
      styles: [".teamMate[_ngcontent-%COMP%]:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\n.teamMate[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  font-weight: normal;\n  padding-top: 17px;\n  margin: 0;\n}\n\n.teamMate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8em;\n}\n\n.teamMate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  width: 50px;\n  height: 50px;\n  margin: 10px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n}\n\n.mate-info[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.panelbar-wrapper[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXN0YWZhc2VycGVrL0dpdGh1Yi9keW5hbWljLW1lbnUtbW9kdWxlLWxvYWRlci9hcHBzL2NsaWVudC9zcmMvYXBwL0Btb2R1bGVzL3BhbmVsLWJhci9wYW5lbC1iYXIuY29tcG9uZW50LnNjc3MiLCJhcHBzL2NsaWVudC9zcmMvYXBwL0Btb2R1bGVzL3BhbmVsLWJhci9wYW5lbC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNLRiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL0Btb2R1bGVzL3BhbmVsLWJhci9wYW5lbC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50ZWFtTWF0ZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiLlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAwO1xuICBsaW5lLWhlaWdodDogMDtcbiAgY2xlYXI6IGJvdGg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi50ZWFtTWF0ZSBoMiB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xuICBtYXJnaW46IDA7XG59XG4udGVhbU1hdGUgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi50ZWFtTWF0ZSBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1hdGUtaW5mbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5wYW5lbGJhci13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iLCIudGVhbU1hdGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIi5cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGNsZWFyOiBib3RoO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi50ZWFtTWF0ZSBoMiB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xuICBtYXJnaW46IDA7XG59XG5cbi50ZWFtTWF0ZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4udGVhbU1hdGUgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1hdGUtaW5mbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnBhbmVsYmFyLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"]
    });

    (function () {
      i0.ɵsetClassMetadata(PanelBarComponent, [{
        type: core_1.Component,
        args: [{
          selector: 'app-panel-bar',
          templateUrl: './panel-bar.component.html',
          styleUrls: ['./panel-bar.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@modules/panel-bar/panel-bar.module.ts":
  /*!********************************************************************!*\
    !*** ./apps/client/src/app/@modules/panel-bar/panel-bar.module.ts ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesPanelBarPanelBarModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var panel_bar_component_1 = __webpack_require__(
    /*! ./panel-bar.component */
    "./apps/client/src/app/@modules/panel-bar/panel-bar.component.ts");

    var kendo_angular_layout_1 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PanelBarModule = function PanelBarModule() {
      _classCallCheck(this, PanelBarModule);
    };

    exports.PanelBarModule = PanelBarModule;
    PanelBarModule.entry = panel_bar_component_1.PanelBarComponent;
    PanelBarModule.ɵmod = i0.ɵɵdefineNgModule({
      type: PanelBarModule
    });
    PanelBarModule.ɵinj = i0.ɵɵdefineInjector({
      factory: function PanelBarModule_Factory(t) {
        return new (t || PanelBarModule)();
      },
      imports: [[common_1.CommonModule, kendo_angular_layout_1.LayoutModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PanelBarModule, {
        declarations: [panel_bar_component_1.PanelBarComponent],
        imports: [common_1.CommonModule, kendo_angular_layout_1.LayoutModule]
      });
    })();

    (function () {
      i0.ɵsetClassMetadata(PanelBarModule, [{
        type: core_1.NgModule,
        args: [{
          imports: [common_1.CommonModule, kendo_angular_layout_1.LayoutModule],
          declarations: [panel_bar_component_1.PanelBarComponent]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@modules/splitter/splitter.component.ts":
  /*!*********************************************************************!*\
    !*** ./apps/client/src/app/@modules/splitter/splitter.component.ts ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesSplitterSplitterComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    var SplitterComponent = /*#__PURE__*/function () {
      function SplitterComponent() {
        _classCallCheck(this, SplitterComponent);
      }

      _createClass(SplitterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SplitterComponent;
    }();

    exports.SplitterComponent = SplitterComponent;

    SplitterComponent.ɵfac = function SplitterComponent_Factory(t) {
      return new (t || SplitterComponent)();
    };

    SplitterComponent.ɵcmp = i0.ɵɵdefineComponent({
      type: SplitterComponent,
      selectors: [["app-splitter"]],
      decls: 69,
      vars: 3,
      consts: [["orientation", "vertical", 2, "height", "340px"], ["size", "30%", 3, "collapsible"], [1, "pane-content"], ["size", "100px"], ["size", "100px", 3, "resizable"]],
      template: function SplitterComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "kendo-splitter", 0);
          i0.ɵɵtext(1, "\n  ");
          i0.ɵɵelementStart(2, "kendo-splitter-pane");
          i0.ɵɵtext(3, "\n    ");
          i0.ɵɵelementStart(4, "kendo-splitter");
          i0.ɵɵtext(5, "\n      ");
          i0.ɵɵelementStart(6, "kendo-splitter-pane", 1);
          i0.ɵɵtext(7, "\n        ");
          i0.ɵɵelementStart(8, "div", 2);
          i0.ɵɵtext(9, "\n          ");
          i0.ɵɵelementStart(10, "h3");
          i0.ɵɵtext(11, "Inner splitter / left pane");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(12, "\n          ");
          i0.ɵɵelementStart(13, "p");
          i0.ɵɵtext(14, "Resizable and collapsible.");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(15, "\n        ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(16, "\n      ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(17, "\n      ");
          i0.ɵɵelementStart(18, "kendo-splitter-pane");
          i0.ɵɵtext(19, "\n        ");
          i0.ɵɵelementStart(20, "div", 2);
          i0.ɵɵtext(21, "\n          ");
          i0.ɵɵelementStart(22, "h3");
          i0.ɵɵtext(23, "Inner splitter / center pane");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(24, "\n          ");
          i0.ɵɵelementStart(25, "p");
          i0.ɵɵtext(26, "Resizable only.");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(27, "\n        ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(28, "\n      ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(29, "\n      ");
          i0.ɵɵelementStart(30, "kendo-splitter-pane", 1);
          i0.ɵɵtext(31, "\n        ");
          i0.ɵɵelementStart(32, "div", 2);
          i0.ɵɵtext(33, "\n          ");
          i0.ɵɵelementStart(34, "h3");
          i0.ɵɵtext(35, "Inner splitter / right pane");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(36, "\n          ");
          i0.ɵɵelementStart(37, "p");
          i0.ɵɵtext(38, "Resizable and collapsible.");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(39, "\n        ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(40, "\n      ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(41, "\n    ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(42, "\n  ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(43, "\n  ");
          i0.ɵɵelementStart(44, "kendo-splitter-pane", 3);
          i0.ɵɵtext(45, "\n    ");
          i0.ɵɵelementStart(46, "div", 2);
          i0.ɵɵtext(47, "\n      ");
          i0.ɵɵelementStart(48, "h3");
          i0.ɵɵtext(49, "Outer splitter / Middle pane");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(50, "\n      ");
          i0.ɵɵelementStart(51, "p");
          i0.ɵɵtext(52, "Resizable only.");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(53, "\n    ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(54, "\n  ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(55, "\n  ");
          i0.ɵɵelementStart(56, "kendo-splitter-pane", 4);
          i0.ɵɵtext(57, "\n    ");
          i0.ɵɵelementStart(58, "div", 2);
          i0.ɵɵtext(59, "\n      ");
          i0.ɵɵelementStart(60, "h3");
          i0.ɵɵtext(61, "Outer splitter / Bottom pane");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(62, "\n      ");
          i0.ɵɵelementStart(63, "p");
          i0.ɵɵtext(64, "Non-resizable and non-collapsible.");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(65, "\n    ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(66, "\n  ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(67, "\n");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(68, "\n");
        }

        if (rf & 2) {
          i0.ɵɵadvance(6);
          i0.ɵɵproperty("collapsible", true);
          i0.ɵɵadvance(24);
          i0.ɵɵproperty("collapsible", true);
          i0.ɵɵadvance(26);
          i0.ɵɵproperty("resizable", false);
        }
      },
      directives: [i1.SplitterComponent, i1.SplitterPaneComponent],
      styles: [".pane-content[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin: 10px 0;\n  padding: 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXN0YWZhc2VycGVrL0dpdGh1Yi9keW5hbWljLW1lbnUtbW9kdWxlLWxvYWRlci9hcHBzL2NsaWVudC9zcmMvYXBwL0Btb2R1bGVzL3NwbGl0dGVyL3NwbGl0dGVyLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9jbGllbnQvc3JjL2FwcC9AbW9kdWxlcy9zcGxpdHRlci9zcGxpdHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDQUYiLCJmaWxlIjoiYXBwcy9jbGllbnQvc3JjL2FwcC9AbW9kdWxlcy9zcGxpdHRlci9zcGxpdHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBhbmUtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiIsIi5wYW5lLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59Il19 */"]
    });

    (function () {
      i0.ɵsetClassMetadata(SplitterComponent, [{
        type: core_1.Component,
        args: [{
          selector: 'app-splitter',
          templateUrl: './splitter.component.html',
          styleUrls: ['./splitter.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@modules/splitter/splitter.module.ts":
  /*!******************************************************************!*\
    !*** ./apps/client/src/app/@modules/splitter/splitter.module.ts ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesSplitterSplitterModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var splitter_component_1 = __webpack_require__(
    /*! ./splitter.component */
    "./apps/client/src/app/@modules/splitter/splitter.component.ts");

    var kendo_angular_layout_1 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SplitterModule = function SplitterModule() {
      _classCallCheck(this, SplitterModule);
    };

    exports.SplitterModule = SplitterModule;
    SplitterModule.entry = splitter_component_1.SplitterComponent;
    SplitterModule.ɵmod = i0.ɵɵdefineNgModule({
      type: SplitterModule
    });
    SplitterModule.ɵinj = i0.ɵɵdefineInjector({
      factory: function SplitterModule_Factory(t) {
        return new (t || SplitterModule)();
      },
      imports: [[common_1.CommonModule, kendo_angular_layout_1.LayoutModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SplitterModule, {
        declarations: [splitter_component_1.SplitterComponent],
        imports: [common_1.CommonModule, kendo_angular_layout_1.LayoutModule]
      });
    })();

    (function () {
      i0.ɵsetClassMetadata(SplitterModule, [{
        type: core_1.NgModule,
        args: [{
          imports: [common_1.CommonModule, kendo_angular_layout_1.LayoutModule],
          declarations: [splitter_component_1.SplitterComponent]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@modules/stepper/stepper.component.ts":
  /*!*******************************************************************!*\
    !*** ./apps/client/src/app/@modules/stepper/stepper.component.ts ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesStepperStepperComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    var StepperComponent = function StepperComponent() {
      _classCallCheck(this, StepperComponent);

      this.current = 1;
      this.steps = [{
        label: 'Personal Info',
        icon: 'user'
      }, {
        label: 'Education',
        icon: 'dictionary-add'
      }, {
        label: 'Attachments',
        icon: 'attachment',
        optional: true
      }, {
        label: 'Preview',
        icon: 'preview'
      }, {
        label: 'Submit',
        icon: 'file-add'
      }];
    };

    exports.StepperComponent = StepperComponent;

    StepperComponent.ɵfac = function StepperComponent_Factory(t) {
      return new (t || StepperComponent)();
    };

    StepperComponent.ɵcmp = i0.ɵɵdefineComponent({
      type: StepperComponent,
      selectors: [["app-stepper"]],
      decls: 4,
      vars: 6,
      consts: [[3, "steps", "stepType", "currentStep", "linear", "currentStepChange"]],
      template: function StepperComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵtext(0, "\n");
          i0.ɵɵelementStart(1, "kendo-stepper", 0);
          i0.ɵɵlistener("currentStepChange", function StepperComponent_Template_kendo_stepper_currentStepChange_1_listener($event) {
            return ctx.current = $event;
          });
          i0.ɵɵtext(2, "\n");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(3, "\n");
        }

        if (rf & 2) {
          i0.ɵɵadvance(1);
          i0.ɵɵstyleProp("width", 570, "px");
          i0.ɵɵproperty("steps", ctx.steps)("stepType", "full")("currentStep", ctx.current)("linear", false);
        }
      },
      directives: [i1.StepperComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL0Btb2R1bGVzL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });

    (function () {
      i0.ɵsetClassMetadata(StepperComponent, [{
        type: core_1.Component,
        args: [{
          selector: 'app-stepper',
          templateUrl: './stepper.component.html',
          styleUrls: ['./stepper.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@modules/stepper/stepper.module.ts":
  /*!****************************************************************!*\
    !*** ./apps/client/src/app/@modules/stepper/stepper.module.ts ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppModulesStepperStepperModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var stepper_component_1 = __webpack_require__(
    /*! ./stepper.component */
    "./apps/client/src/app/@modules/stepper/stepper.component.ts");

    var kendo_angular_layout_1 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StepperModule = function StepperModule() {
      _classCallCheck(this, StepperModule);
    };

    exports.StepperModule = StepperModule;
    StepperModule.entry = stepper_component_1.StepperComponent;
    StepperModule.ɵmod = i0.ɵɵdefineNgModule({
      type: StepperModule
    });
    StepperModule.ɵinj = i0.ɵɵdefineInjector({
      factory: function StepperModule_Factory(t) {
        return new (t || StepperModule)();
      },
      imports: [[common_1.CommonModule, kendo_angular_layout_1.LayoutModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StepperModule, {
        declarations: [stepper_component_1.StepperComponent],
        imports: [common_1.CommonModule, kendo_angular_layout_1.LayoutModule]
      });
    })();

    (function () {
      i0.ɵsetClassMetadata(StepperModule, [{
        type: core_1.NgModule,
        args: [{
          imports: [common_1.CommonModule, kendo_angular_layout_1.LayoutModule],
          declarations: [stepper_component_1.StepperComponent]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@shared/index.ts":
  /*!**********************************************!*\
    !*** ./apps/client/src/app/@shared/index.ts ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppSharedIndexTs(module, exports, __webpack_require__) {
    "use strict";

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./shared.module */
    "./apps/client/src/app/@shared/shared.module.ts"));

    __export(__webpack_require__(
    /*! ./loader/loader.component */
    "./apps/client/src/app/@shared/loader/loader.component.ts"));
    /***/

  },

  /***/
  "./apps/client/src/app/@shared/loader/loader.component.ts":
  /*!****************************************************************!*\
    !*** ./apps/client/src/app/@shared/loader/loader.component.ts ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppSharedLoaderLoaderComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoaderComponent = /*#__PURE__*/function () {
      function LoaderComponent() {
        _classCallCheck(this, LoaderComponent);

        this.isLoading = false;
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    exports.LoaderComponent = LoaderComponent;

    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)();
    };

    LoaderComponent.ɵcmp = i0.ɵɵdefineComponent({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      inputs: {
        isLoading: "isLoading",
        message: "message"
      },
      decls: 8,
      vars: 2,
      consts: [[1, "text-xs-center", 3, "hidden"], [1, "fas", "fa-cog", "fa-spin", "fa-3x"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 0);
          i0.ɵɵtext(1, "\n  ");
          i0.ɵɵelement(2, "i", 1);
          i0.ɵɵtext(3, " ");
          i0.ɵɵelementStart(4, "span");
          i0.ɵɵtext(5);
          i0.ɵɵelementEnd();
          i0.ɵɵtext(6, "\n");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(7, "\n");
        }

        if (rf & 2) {
          i0.ɵɵproperty("hidden", !ctx.isLoading);
          i0.ɵɵadvance(5);
          i0.ɵɵtextInterpolate(ctx.message);
        }
      },
      styles: [".fa[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXN0YWZhc2VycGVrL0dpdGh1Yi9keW5hbWljLW1lbnUtbW9kdWxlLWxvYWRlci9hcHBzL2NsaWVudC9zcmMvYXBwL0BzaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsImFwcHMvY2xpZW50L3NyYy9hcHAvQHNoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL0BzaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4iLCIuZmEge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */"]
    });

    (function () {
      i0.ɵsetClassMetadata(LoaderComponent, [{
        type: core_1.Component,
        args: [{
          selector: 'app-loader',
          templateUrl: './loader.component.html',
          styleUrls: ['./loader.component.scss']
        }]
      }], function () {
        return [];
      }, {
        isLoading: [{
          type: core_1.Input
        }],
        message: [{
          type: core_1.Input
        }]
      });
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/@shared/shared.module.ts":
  /*!******************************************************!*\
    !*** ./apps/client/src/app/@shared/shared.module.ts ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppSharedSharedModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var loader_component_1 = __webpack_require__(
    /*! ./loader/loader.component */
    "./apps/client/src/app/@shared/loader/loader.component.ts");

    var _core_1 = __webpack_require__(
    /*! ../@core */
    "./apps/client/src/app/@core/index.ts");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var log = new _core_1.Logger('SharedModule');

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);

      log.debug('constructor');
    };

    exports.SharedModule = SharedModule;
    SharedModule.ɵmod = i0.ɵɵdefineNgModule({
      type: SharedModule
    });
    SharedModule.ɵinj = i0.ɵɵdefineInjector({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[common_1.CommonModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, {
        declarations: [loader_component_1.LoaderComponent],
        imports: [common_1.CommonModule],
        exports: [loader_component_1.LoaderComponent]
      });
    })();

    (function () {
      i0.ɵsetClassMetadata(SharedModule, [{
        type: core_1.NgModule,
        args: [{
          imports: [common_1.CommonModule],
          declarations: [loader_component_1.LoaderComponent],
          exports: [loader_component_1.LoaderComponent]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/app-routing.module.ts":
  /*!***************************************************!*\
    !*** ./apps/client/src/app/app-routing.module.ts ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppAppRoutingModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    exports.AppRoutingModule = AppRoutingModule;
    AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      providers: [],
      imports: [[router_1.RouterModule.forRoot(routes, {
        preloadingStrategy: router_1.PreloadAllModules
      })], router_1.RouterModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, {
        imports: [i1.RouterModule],
        exports: [router_1.RouterModule]
      });
    })();

    (function () {
      i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: core_1.NgModule,
        args: [{
          imports: [router_1.RouterModule.forRoot(routes, {
            preloadingStrategy: router_1.PreloadAllModules
          })],
          exports: [router_1.RouterModule],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/app.component.ts":
  /*!**********************************************!*\
    !*** ./apps/client/src/app/app.component.ts ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppAppComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _core_1 = __webpack_require__(
    /*! ./@core */
    "./apps/client/src/app/@core/index.ts");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var log = new _core_1.Logger('AppComponent');

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'client';
      log.debug('constructor');
    };

    exports.AppComponent = AppComponent;

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = i0.ɵɵdefineComponent({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelement(0, "router-outlet");
          i0.ɵɵtext(1, "\n");
        }
      },
      directives: [i1.RouterOutlet],
      styles: ["app-root {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXN0YWZhc2VycGVrL0dpdGh1Yi9keW5hbWljLW1lbnUtbW9kdWxlLWxvYWRlci9hcHBzL2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsImFwcHMvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6ImFwcHMvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXJvb3Qge1xuICBwYWRkaW5nOiAwO1xufVxuIiwiYXBwLXJvb3Qge1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */"],
      encapsulation: 2
    });

    (function () {
      i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          encapsulation: core_1.ViewEncapsulation.None
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/app.module.ts":
  /*!*******************************************!*\
    !*** ./apps/client/src/app/app.module.ts ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppAppModuleTs(module, exports, __webpack_require__) {
    "use strict";

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var platform_browser_1 = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var animations_1 = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var http_1 = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    __webpack_require__(
    /*! reflect-metadata */
    "./node_modules/reflect-metadata/Reflect.js");

    var app_routing_module_1 = __webpack_require__(
    /*! ./app-routing.module */
    "./apps/client/src/app/app-routing.module.ts");

    var app_component_1 = __webpack_require__(
    /*! ./app.component */
    "./apps/client/src/app/app.component.ts");

    var home_module_1 = __webpack_require__(
    /*! ./home/home.module */
    "./apps/client/src/app/home/home.module.ts");

    var _core_1 = __webpack_require__(
    /*! ./@core */
    "./apps/client/src/app/@core/index.ts");

    var _shared_1 = __webpack_require__(
    /*! ./@shared */
    "./apps/client/src/app/@shared/index.ts");

    var shell_module_1 = __webpack_require__(
    /*! ./shell/shell.module */
    "./apps/client/src/app/shell/shell.module.ts");

    var config_service_1 = __webpack_require__(
    /*! ./@core/services/config.service */
    "./apps/client/src/app/@core/services/config.service.ts");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    exports.AppModule = AppModule;
    AppModule.ɵmod = i0.ɵɵdefineNgModule({
      type: AppModule,
      bootstrap: [app_component_1.AppComponent]
    });
    AppModule.ɵinj = i0.ɵɵdefineInjector({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: core_1.APP_INITIALIZER,
        useFactory: function useFactory(config) {
          return function () {
            return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return config.load();

                    case 2:
                      return _context4.abrupt("return", _context4.sent);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          };
        },
        deps: [config_service_1.ConfigService],
        multi: true
      }],
      imports: [[platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule, http_1.HttpClientModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, _core_1.CoreModule, _shared_1.SharedModule, shell_module_1.ShellModule, home_module_1.HomeModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, {
        declarations: [app_component_1.AppComponent],
        imports: [platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule, http_1.HttpClientModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, _core_1.CoreModule, _shared_1.SharedModule, shell_module_1.ShellModule, home_module_1.HomeModule]
      });
    })();

    (function () {
      var _this21 = this;

      i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
          declarations: [app_component_1.AppComponent],
          imports: [platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule, http_1.HttpClientModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, _core_1.CoreModule, _shared_1.SharedModule, shell_module_1.ShellModule, home_module_1.HomeModule],
          providers: [{
            provide: core_1.APP_INITIALIZER,
            useFactory: function useFactory(config) {
              return function () {
                return __awaiter(_this21, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return config.load();

                        case 2:
                          return _context5.abrupt("return", _context5.sent);

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));
              };
            },
            deps: [config_service_1.ConfigService],
            multi: true
          }],
          bootstrap: [app_component_1.AppComponent]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/home/home-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./apps/client/src/app/home/home-routing.module.ts ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppHomeHomeRoutingModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var home_component_1 = __webpack_require__(
    /*! ./home.component */
    "./apps/client/src/app/home/home.component.ts");

    var shell_service_1 = __webpack_require__(
    /*! ../shell/shell.service */
    "./apps/client/src/app/shell/shell.service.ts");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [shell_service_1.Shell.childRoutes([{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: home_component_1.HomeComponent,
      data: {
        title: 'Home'
      }
    }])];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    exports.HomeRoutingModule = HomeRoutingModule;
    HomeRoutingModule.ɵmod = i0.ɵɵdefineNgModule({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = i0.ɵɵdefineInjector({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      providers: [],
      imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HomeRoutingModule, {
        imports: [i1.RouterModule],
        exports: [router_1.RouterModule]
      });
    })();

    (function () {
      i0.ɵsetClassMetadata(HomeRoutingModule, [{
        type: core_1.NgModule,
        args: [{
          imports: [router_1.RouterModule.forChild(routes)],
          exports: [router_1.RouterModule],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/home/home.component.ts":
  /*!****************************************************!*\
    !*** ./apps/client/src/app/home/home.component.ts ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppHomeHomeComponentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _core_1 = __webpack_require__(
    /*! ../@core */
    "./apps/client/src/app/@core/index.ts");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var log = new _core_1.Logger('HomeComponent');

    var HomeComponent = function HomeComponent() {
      _classCallCheck(this, HomeComponent);

      log.debug('constructor');
    };

    exports.HomeComponent = HomeComponent;

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = i0.ɵɵdefineComponent({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 0,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {},
      styles: ["app-home {\n  padding: 0;\n}\n\nkendo-drawer-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n}\n\n.k-icon {\n  font-size: 20px;\n}\n\n.custom-toolbar {\n  width: 100%;\n  background-color: #f6f6f6;\n  line-height: 10px;\n  border-bottom: inset;\n  border-bottom-width: 1px;\n  padding: 3px 8px;\n  color: #656565;\n}\n\n.mail-box {\n  margin-left: 20px;\n  font-weight: bold;\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXN0YWZhc2VycGVrL0dpdGh1Yi9keW5hbWljLW1lbnUtbW9kdWxlLWxvYWRlci9hcHBzL2NsaWVudC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsImFwcHMvY2xpZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREdBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoiYXBwcy9jbGllbnQvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaG9tZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cblxua2VuZG8tZHJhd2VyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmstaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmN1c3RvbS10b29sYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBpbnNldDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLm1haWwtYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4iLCJhcHAtaG9tZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmtlbmRvLWRyYXdlci1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5rLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jdXN0b20tdG9vbGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogaW5zZXQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgY29sb3I6ICM2NTY1NjU7XG59XG5cbi5tYWlsLWJveCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxN3B4O1xufSJdfQ== */"],
      encapsulation: 2
    });

    (function () {
      i0.ɵsetClassMetadata(HomeComponent, [{
        type: core_1.Component,
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss'],
          encapsulation: core_1.ViewEncapsulation.None
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/home/home.module.ts":
  /*!*************************************************!*\
    !*** ./apps/client/src/app/home/home.module.ts ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppHomeHomeModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var home_routing_module_1 = __webpack_require__(
    /*! ./home-routing.module */
    "./apps/client/src/app/home/home-routing.module.ts");

    var home_component_1 = __webpack_require__(
    /*! ./home.component */
    "./apps/client/src/app/home/home.component.ts");

    var _core_1 = __webpack_require__(
    /*! ../@core */
    "./apps/client/src/app/@core/index.ts");

    var _shared_1 = __webpack_require__(
    /*! ../@shared */
    "./apps/client/src/app/@shared/index.ts");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var log = new _core_1.Logger('HomeModule');

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);

      log.debug('constructor');
    };

    exports.HomeModule = HomeModule;
    HomeModule.ɵmod = i0.ɵɵdefineNgModule({
      type: HomeModule
    });
    HomeModule.ɵinj = i0.ɵɵdefineInjector({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[common_1.CommonModule, _core_1.CoreModule, _shared_1.SharedModule, home_routing_module_1.HomeRoutingModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HomeModule, {
        declarations: [home_component_1.HomeComponent],
        imports: [common_1.CommonModule, _core_1.CoreModule, _shared_1.SharedModule, home_routing_module_1.HomeRoutingModule]
      });
    })();

    (function () {
      i0.ɵsetClassMetadata(HomeModule, [{
        type: core_1.NgModule,
        args: [{
          imports: [common_1.CommonModule, _core_1.CoreModule, _shared_1.SharedModule, home_routing_module_1.HomeRoutingModule],
          declarations: [home_component_1.HomeComponent]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/shell/menu-item.ts":
  /*!************************************************!*\
    !*** ./apps/client/src/app/shell/menu-item.ts ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppShellMenuItemTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var class_transformer_1 = __webpack_require__(
    /*! class-transformer */
    "./node_modules/class-transformer/index.js");

    var MenuItem = /*#__PURE__*/function () {
      function MenuItem() {
        _classCallCheck(this, MenuItem);
      }

      _createClass(MenuItem, [{
        key: "init",
        value: function init(_data) {}
      }, {
        key: "toJSON",
        value: function toJSON(data) {}
      }, {
        key: "text",
        get: function get() {
          return this.title;
        }
      }]);

      return MenuItem;
    }();

    __decorate([class_transformer_1.Expose(), __metadata("design:type", String)], MenuItem.prototype, "icon", void 0);

    __decorate([class_transformer_1.Expose(), __metadata("design:type", Number)], MenuItem.prototype, "id", void 0);

    __decorate([class_transformer_1.Expose(), __metadata("design:type", String)], MenuItem.prototype, "module", void 0);

    __decorate([class_transformer_1.Expose(), __metadata("design:type", String)], MenuItem.prototype, "title", void 0);

    __decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean)], MenuItem.prototype, "selected", void 0);

    __decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [])], MenuItem.prototype, "text", null);

    exports.MenuItem = MenuItem;
    /***/
  },

  /***/
  "./apps/client/src/app/shell/shell.component.ts":
  /*!******************************************************!*\
    !*** ./apps/client/src/app/shell/shell.component.ts ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppShellShellComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var operators_1 = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var class_transformer_1 = __webpack_require__(
    /*! class-transformer */
    "./node_modules/class-transformer/index.js");

    var ramda_1 = __webpack_require__(
    /*! ramda */
    "./node_modules/ramda/es/index.js");

    var _core_1 = __webpack_require__(
    /*! ../@core */
    "./apps/client/src/app/@core/index.ts");

    var environment_1 = __webpack_require__(
    /*! ../../environments/environment */
    "./apps/client/src/environments/environment.ts");

    var menu_item_1 = __webpack_require__(
    /*! ./menu-item */
    "./apps/client/src/app/shell/menu-item.ts");

    var api_service_1 = __webpack_require__(
    /*! ../@core/services/api.service */
    "./apps/client/src/app/@core/services/api.service.ts");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var i1 = __webpack_require__(
    /*! ../@core */
    "./apps/client/src/app/@core/index.ts");

    var i2 = __webpack_require__(
    /*! ../@core/services/api.service */
    "./apps/client/src/app/@core/services/api.service.ts");

    var i3 = __webpack_require__(
    /*! @progress/kendo-angular-buttons */
    "./node_modules/@progress/kendo-angular-buttons/__ivy_ngcc__/dist/fesm2015/index.js");

    var i4 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    var i5 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["moduleContainer"];
    var log = new _core_1.Logger('ShellComponent');

    var ShellComponent = /*#__PURE__*/function () {
      function ShellComponent(moduleLoader, apiService) {
        _classCallCheck(this, ShellComponent);

        this.moduleLoader = moduleLoader;
        this.apiService = apiService;
        this.items = [];
        log.debug('constructor');
      }

      _createClass(ShellComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var response;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (environment_1.environment.production) {
                      _core_1.Logger.enableProductionMode();
                    }

                    log.debug('init');
                    _context6.next = 4;
                    return this.apiService.getAllMenu().pipe(operators_1.map(function (value) {
                      return class_transformer_1.plainToClass(menu_item_1.MenuItem, value);
                    })).toPromise();

                  case 4:
                    response = _context6.sent;

                    if (!ramda_1.isEmpty(response)) {
                      Object.assign(response[0], {
                        selected: true
                      });
                      this.items = response;
                      this.loadModule(response[0].module);
                    }

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "loadModule",
        value: function loadModule(moduleName) {
          var _this22 = this;

          this.container.clear();
          this.moduleLoader.load(moduleName, this.container).then(function (r) {
            _this22.selected = _this22.items.find(function (i) {
              return i.selected;
            });
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(ev) {
          this.loadModule(ev.item.module);
        }
      }]);

      return ShellComponent;
    }();

    exports.ShellComponent = ShellComponent;

    ShellComponent.ɵfac = function ShellComponent_Factory(t) {
      return new (t || ShellComponent)(i0.ɵɵdirectiveInject(i1.ModuleLoaderService), i0.ɵɵdirectiveInject(i2.ApiService));
    };

    ShellComponent.ɵcmp = i0.ɵɵdefineComponent({
      type: ShellComponent,
      selectors: [["app-shell"]],
      viewQuery: function ShellComponent_Query(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵstaticViewQuery(_c0, true, core_1.ViewContainerRef);
        }

        if (rf & 2) {
          var _t;

          i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
        }
      },
      decls: 22,
      vars: 6,
      consts: [[1, "custom-toolbar"], ["kendoButton", "", "look", "flat", 3, "icon", "click"], [1, "mail-box"], [3, "items", "mode", "mini", "expanded", "select"], ["drawer", ""], ["moduleContainer", ""]],
      template: function ShellComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 0);
          i0.ɵɵtext(1, "\n  ");
          i0.ɵɵelementStart(2, "button", 1);
          i0.ɵɵlistener("click", function ShellComponent_Template_button_click_2_listener() {
            i0.ɵɵrestoreView(_r2);

            var _r0 = i0.ɵɵreference(11);

            return _r0.toggle();
          });
          i0.ɵɵelementEnd();
          i0.ɵɵtext(3, "\n  ");
          i0.ɵɵelementStart(4, "span", 2);
          i0.ɵɵtext(5);
          i0.ɵɵelementEnd();
          i0.ɵɵtext(6, "\n");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(7, "\n");
          i0.ɵɵelementStart(8, "kendo-drawer-container");
          i0.ɵɵtext(9, "\n  ");
          i0.ɵɵelementStart(10, "kendo-drawer", 3, 4);
          i0.ɵɵlistener("select", function ShellComponent_Template_kendo_drawer_select_10_listener($event) {
            return ctx.onSelect($event);
          });
          i0.ɵɵelementEnd();
          i0.ɵɵtext(12, "\n  ");
          i0.ɵɵelementStart(13, "kendo-drawer-content");
          i0.ɵɵtext(14, "\n    ");
          i0.ɵɵelement(15, "router-outlet");
          i0.ɵɵtext(16, "\n    ");
          i0.ɵɵelement(17, "div", null, 5);
          i0.ɵɵtext(19, "\n  ");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(20, "\n");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(21, "\n");
        }

        if (rf & 2) {
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("icon", "layout");
          i0.ɵɵadvance(3);
          i0.ɵɵtextInterpolate1("Application ", ctx.selected == null ? null : ctx.selected.text, "");
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("items", ctx.items)("mode", "push")("mini", true)("expanded", true);
        }
      },
      directives: [i3.Button, i4.DrawerContainerComponent, i4.DrawerComponent, i4.DrawerContentComponent, i5.RouterOutlet],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIn0= */"],
      encapsulation: 2
    });

    (function () {
      i0.ɵsetClassMetadata(ShellComponent, [{
        type: core_1.Component,
        args: [{
          selector: 'app-shell',
          templateUrl: './shell.component.html',
          styleUrls: ['./shell.component.scss'],
          encapsulation: core_1.ViewEncapsulation.None
        }]
      }], function () {
        return [{
          type: i1.ModuleLoaderService
        }, {
          type: i2.ApiService
        }];
      }, {
        container: [{
          type: core_1.ViewChild,
          args: ['moduleContainer', {
            read: core_1.ViewContainerRef,
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/shell/shell.module.ts":
  /*!***************************************************!*\
    !*** ./apps/client/src/app/shell/shell.module.ts ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppShellShellModuleTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var kendo_angular_layout_1 = __webpack_require__(
    /*! @progress/kendo-angular-layout */
    "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");

    var kendo_angular_buttons_1 = __webpack_require__(
    /*! @progress/kendo-angular-buttons */
    "./node_modules/@progress/kendo-angular-buttons/__ivy_ngcc__/dist/fesm2015/index.js");

    var kendo_angular_inputs_1 = __webpack_require__(
    /*! @progress/kendo-angular-inputs */
    "./node_modules/@progress/kendo-angular-inputs/__ivy_ngcc__/dist/fesm2015/index.js");

    var shell_component_1 = __webpack_require__(
    /*! ./shell.component */
    "./apps/client/src/app/shell/shell.component.ts");

    var _core_1 = __webpack_require__(
    /*! ../@core */
    "./apps/client/src/app/@core/index.ts");

    var i0 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var log = new _core_1.Logger('ShellModule');

    var ShellModule = function ShellModule() {
      _classCallCheck(this, ShellModule);

      log.debug('constructor');
    };

    exports.ShellModule = ShellModule;
    ShellModule.ɵmod = i0.ɵɵdefineNgModule({
      type: ShellModule
    });
    ShellModule.ɵinj = i0.ɵɵdefineInjector({
      factory: function ShellModule_Factory(t) {
        return new (t || ShellModule)();
      },
      imports: [[common_1.CommonModule, router_1.RouterModule, kendo_angular_layout_1.LayoutModule, kendo_angular_buttons_1.ButtonsModule, kendo_angular_layout_1.DrawerModule, kendo_angular_inputs_1.InputsModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ShellModule, {
        declarations: [shell_component_1.ShellComponent],
        imports: [common_1.CommonModule, router_1.RouterModule, kendo_angular_layout_1.LayoutModule, kendo_angular_buttons_1.ButtonsModule, kendo_angular_layout_1.DrawerModule, kendo_angular_inputs_1.InputsModule]
      });
    })();

    (function () {
      i0.ɵsetClassMetadata(ShellModule, [{
        type: core_1.NgModule,
        args: [{
          imports: [common_1.CommonModule, router_1.RouterModule, kendo_angular_layout_1.LayoutModule, kendo_angular_buttons_1.ButtonsModule, kendo_angular_layout_1.DrawerModule, kendo_angular_inputs_1.InputsModule],
          declarations: [shell_component_1.ShellComponent]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/client/src/app/shell/shell.service.ts":
  /*!****************************************************!*\
    !*** ./apps/client/src/app/shell/shell.service.ts ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcAppShellShellServiceTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var shell_component_1 = __webpack_require__(
    /*! ./shell.component */
    "./apps/client/src/app/shell/shell.component.ts");

    var Shell = /*#__PURE__*/function () {
      function Shell() {
        _classCallCheck(this, Shell);
      }

      _createClass(Shell, null, [{
        key: "childRoutes",
        value: function childRoutes(routes) {
          return {
            path: '',
            component: shell_component_1.ShellComponent,
            children: routes,
            data: {
              reuse: true
            }
          };
        }
      }]);

      return Shell;
    }();

    exports.Shell = Shell;
    /***/
  },

  /***/
  "./apps/client/src/environments/.env.ts":
  /*!**********************************************!*\
    !*** ./apps/client/src/environments/.env.ts ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcEnvironmentsEnvTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.env = {
      'npm_package_version': '0.0.1'
    };
    /***/
  },

  /***/
  "./apps/client/src/environments/environment.ts":
  /*!*****************************************************!*\
    !*** ./apps/client/src/environments/environment.ts ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function appsClientSrcEnvironmentsEnvironmentTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _env_1 = __webpack_require__(
    /*! ./.env */
    "./apps/client/src/environments/.env.ts");

    exports.environment = {
      production: false,
      serverUrl: 'http://localhost:3000',
      version: _env_1.env.npm_package_version + '-dev'
    };
    /***/
  },

  /***/
  "./apps/client/src/main.ts":
  /*!*********************************!*\
    !*** ./apps/client/src/main.ts ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function appsClientSrcMainTs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var platform_browser_dynamic_1 = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");

    var app_module_1 = __webpack_require__(
    /*! ./app/app.module */
    "./apps/client/src/app/app.module.ts");

    var environment_1 = __webpack_require__(
    /*! ./environments/environment */
    "./apps/client/src/environments/environment.ts");

    if (environment_1.environment.production) {
      core_1.enableProdMode();
    }

    var platform = platform_browser_dynamic_1.platformBrowserDynamic();
    platform.bootstrapModule(app_module_1.AppModule)["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************************!*\
    !*** multi ./apps/client/src/main.ts ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/mustafaserpek/Github/dynamic-menu-module-loader/apps/client/src/main.ts */
    "./apps/client/src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map