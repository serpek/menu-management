/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const bodyParser = __webpack_require__(4);
const helmet = __webpack_require__(5);
const rateLimit = __webpack_require__(6);
const app_module_1 = __webpack_require__(7);
const env_1 = __webpack_require__(20);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const version = __webpack_require__(21).version || '';
    app.setGlobalPrefix(env_1.env.API_DEFAULT_PREFIX);
    const options = new swagger_1.DocumentBuilder()
        .setTitle(env_1.env.SWAGGER_TITLE)
        .setDescription(env_1.env.SWAGGER_DESCRIPTION)
        .setVersion(version)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(env_1.env.SWAGGER_PREFIX, app, document);
    app.enableCors();
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(new rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    await app.listen(process.env.API_PORT || env_1.env.API_DEFAULT_PORT);
}
bootstrap().catch(err => console.error(err));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express-rate-limit");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(2);
const serve_static_1 = __webpack_require__(8);
const path_1 = __webpack_require__(9);
const app_controller_1 = __webpack_require__(10);
const app_service_1 = __webpack_require__(11);
const menu_manager_module_1 = __webpack_require__(12);
const contacts_module_1 = __webpack_require__(16);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '../', 'client')
            }),
            menu_manager_module_1.MenuManagerModule,
            contacts_module_1.ContactsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(11);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
};
AppController = __decorate([
    swagger_1.ApiTags('Application'),
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(2);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(2);
const in_memory_db_1 = __webpack_require__(13);
const menu_manager_controller_1 = __webpack_require__(14);
let MenuManagerModule = class MenuManagerModule {
};
MenuManagerModule = __decorate([
    common_1.Module({
        imports: [
            in_memory_db_1.InMemoryDBModule.forFeature('menu')
        ],
        controllers: [
            menu_manager_controller_1.MenuManagerController
        ]
    })
], MenuManagerModule);
exports.MenuManagerModule = MenuManagerModule;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@nestjs-addons/in-memory-db");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

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
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(2);
const in_memory_db_1 = __webpack_require__(13);
const swagger_1 = __webpack_require__(3);
const menu_entity_1 = __webpack_require__(15);
let MenuManagerController = class MenuManagerController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    getAllMenu() {
        return this.menuService.getAll();
    }
    seedMenu() {
        const recordFactory = (idx) => ({ id: idx, title: `Menu ${idx}`, module: `module ${idx}`, icon: 'k-i-user' });
        this.menuService.seed(recordFactory, 10);
        return this.menuService.getAll();
    }
    createMenu(menu) {
        return this.menuService.create(menu);
    }
    async createManyMenu(menu) {
        let createManyAsync = await this.menuService.createManyAsync(menu).toPromise();
        return Promise.resolve(createManyAsync);
    }
    async updateMenu(menu) {
        try {
            await this.menuService.updateAsync(menu).toPromise();
            return Promise.resolve(true);
        }
        catch (e) {
            return Promise.reject(false);
        }
    }
    async deleteMenu(id) {
        try {
            await this.menuService.deleteAsync(+id).toPromise();
            return Promise.resolve(true);
        }
        catch (e) {
            return Promise.reject(false);
        }
    }
    async getMenuById(id) {
        try {
            const response = await this.menuService.queryAsync(data => data.id === +id).toPromise();
            return Promise.resolve(response);
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ operationId: 'getAllMenu' }),
    swagger_1.ApiResponse({
        isArray: true,
        status: common_1.HttpStatus.OK,
        type: menu_entity_1.MenuEntity,
        description: ''
    }),
    openapi.ApiResponse({ status: 200, type: [__webpack_require__(15).MenuEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], MenuManagerController.prototype, "getAllMenu", null);
__decorate([
    common_1.Get('seed'),
    swagger_1.ApiOperation({ operationId: 'seedMenu' }),
    swagger_1.ApiResponse({
        isArray: true,
        status: common_1.HttpStatus.OK,
        type: menu_entity_1.MenuEntity,
        description: ''
    }),
    openapi.ApiResponse({ status: 200, type: [__webpack_require__(15).MenuEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuManagerController.prototype, "seedMenu", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ operationId: 'createMenu' }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.CREATED,
        type: menu_entity_1.MenuEntity,
        description: 'Menu create response',
        isArray: false
    }),
    openapi.ApiResponse({ status: 201, type: __webpack_require__(15).MenuEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_entity_1.MenuEntity]),
    __metadata("design:returntype", menu_entity_1.MenuEntity)
], MenuManagerController.prototype, "createMenu", null);
__decorate([
    common_1.Post('/many'),
    swagger_1.ApiOperation({ operationId: 'createManyMenu' }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.CREATED,
        type: menu_entity_1.MenuEntity,
        description: 'Menu multiple create response',
        isArray: true
    }),
    swagger_1.ApiBody({ type: menu_entity_1.MenuEntity, isArray: true }),
    openapi.ApiResponse({ status: 201, type: [__webpack_require__(15).MenuEntity] }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], MenuManagerController.prototype, "createManyMenu", null);
__decorate([
    common_1.Put(),
    swagger_1.ApiOperation({ operationId: 'updateMenu' }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: Boolean,
        description: 'Menu update response',
        links: null,
        isArray: false
    }),
    openapi.ApiResponse({ status: 200, type: Boolean }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_entity_1.MenuEntity]),
    __metadata("design:returntype", Promise)
], MenuManagerController.prototype, "updateMenu", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOperation({ operationId: 'deleteMenu' }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: Boolean,
        description: 'Menu delete response',
        links: null,
        isArray: false
    }),
    swagger_1.ApiParam({ name: 'id', type: Number }),
    openapi.ApiResponse({ status: 200, type: Boolean }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MenuManagerController.prototype, "deleteMenu", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOperation({ operationId: 'getMenuById' }),
    swagger_1.ApiParam({ name: 'id', type: Number }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: menu_entity_1.MenuEntity,
        description: 'Menu id param query response',
        isArray: true
    }),
    openapi.ApiResponse({ status: 200, type: [__webpack_require__(15).MenuEntity] }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MenuManagerController.prototype, "getMenuById", null);
MenuManagerController = __decorate([
    swagger_1.ApiTags('menu'),
    common_1.Controller(`menu`),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.FORBIDDEN, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.BAD_REQUEST, description: 'Bad request.' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.INTERNAL_SERVER_ERROR, description: 'Server error.' }),
    __metadata("design:paramtypes", [in_memory_db_1.InMemoryDBService])
], MenuManagerController);
exports.MenuManagerController = MenuManagerController;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

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
const openapi = __webpack_require__(3);
const swagger_1 = __webpack_require__(3);
class MenuEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, module: { required: true, type: () => String }, icon: { required: true, type: () => String } };
    }
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], MenuEntity.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], MenuEntity.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], MenuEntity.prototype, "module", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], MenuEntity.prototype, "icon", void 0);
exports.MenuEntity = MenuEntity;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(2);
const contacts_controller_1 = __webpack_require__(17);
let ContactsModule = class ContactsModule {
};
ContactsModule = __decorate([
    common_1.Module({
        imports: [
            common_1.HttpModule
        ],
        controllers: [contacts_controller_1.ContactsController]
    })
], ContactsModule);
exports.ContactsModule = ContactsModule;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const class_transformer_1 = __webpack_require__(18);
const contact_entity_1 = __webpack_require__(19);
let ContactsController = class ContactsController {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getContacts() {
        try {
            const { data } = await this.httpService.get('https://5ef8b4f08e584a00163d9abd.mockapi.io/api/v1/Contacts?limit=10').toPromise();
            const users = class_transformer_1.plainToClass(contact_entity_1.ContactEntity, data);
            return Promise.resolve(users);
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    async getContactById(id) {
        try {
            const { data } = await this.httpService.get(`https://5ef8b4f08e584a00163d9abd.mockapi.io/api/v1/Contacts/${id}`).toPromise();
            const user = class_transformer_1.plainToClass(contact_entity_1.ContactEntity, data);
            return Promise.resolve(user);
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ operationId: 'getContacts' }),
    swagger_1.ApiResponse({
        isArray: true,
        status: common_1.HttpStatus.OK,
        type: contact_entity_1.ContactEntity
    }),
    openapi.ApiResponse({ status: 200, type: [__webpack_require__(19).ContactEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "getContacts", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOperation({ operationId: 'getContactById' }),
    swagger_1.ApiParam({ name: 'id', type: Number }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: contact_entity_1.ContactEntity
    }),
    openapi.ApiResponse({ status: 200, type: __webpack_require__(19).ContactEntity }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "getContactById", null);
ContactsController = __decorate([
    swagger_1.ApiTags('contacts'),
    common_1.Controller(`contacts`),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.FORBIDDEN, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.BAD_REQUEST, description: 'Bad request.' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.INTERNAL_SERVER_ERROR, description: 'Server error.' }),
    __metadata("design:paramtypes", [common_1.HttpService])
], ContactsController);
exports.ContactsController = ContactsController;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("class-transformer");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

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
const openapi = __webpack_require__(3);
const swagger_1 = __webpack_require__(3);
class ContactEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, createdAt: { required: true, type: () => String }, name: { required: true, type: () => String }, avatar: { required: true, type: () => String }, position: { required: true, type: () => String } };
    }
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ContactEntity.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ContactEntity.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ContactEntity.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ContactEntity.prototype, "avatar", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ContactEntity.prototype, "position", void 0);
exports.ContactEntity = ContactEntity;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.env = {
    API_DEFAULT_PORT: 3000,
    API_DEFAULT_PREFIX: '/v1',
    SWAGGER_TITLE: 'Menu API',
    SWAGGER_DESCRIPTION: 'API used for menu management',
    SWAGGER_PREFIX: '/docs'
};


/***/ }),
/* 21 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"dynamic-menu-module-loader\",\"version\":\"0.0.1\",\"description\":\"\",\"author\":\"\",\"private\":true,\"license\":\"MIT\",\"scripts\":{\"prebuild\":\"rimraf dist\",\"nest:build\":\"nest build\",\"nest:start\":\"nest start\",\"nest:start:dev\":\"nest start --watch\",\"nest:start:debug\":\"nest start --debug --watch\",\"nest:start:prod\":\"node dist/server/main.js\",\"ng\":\"ng\",\"ng:env\":\"ngx-scripts env npm_package_version --out ./apps/client/src/environments/.env.ts \",\"ng:nswag\":\"nswag run\",\"ng:start\":\"ng serve\",\"ng:build\":\"ng build\",\"ng:deploy\":\"npm run env -s && ng deploy\"},\"dependencies\":{\"@angular/animations\":\"~9.1.11\",\"@angular/common\":\"~9.1.11\",\"@angular/compiler\":\"~9.1.11\",\"@angular/core\":\"~9.1.11\",\"@angular/forms\":\"~9.1.11\",\"@angular/localize\":\"~9.1.11\",\"@angular/platform-browser\":\"~9.1.11\",\"@angular/platform-browser-dynamic\":\"~9.1.11\",\"@angular/router\":\"~9.1.11\",\"@fortawesome/fontawesome-free\":\"^5.1.0\",\"@nestjs-addons/in-memory-db\":\"^1.8.10\",\"@nestjs/common\":\"^7.0.0\",\"@nestjs/core\":\"^7.0.0\",\"@nestjs/platform-express\":\"^7.0.0\",\"@nestjs/serve-static\":\"^2.1.3\",\"@nestjs/swagger\":\"^4.5.11\",\"@progress/kendo-angular-common\":\"^1.0.0\",\"@progress/kendo-angular-inputs\":\"^6.6.1\",\"@progress/kendo-angular-intl\":\"^2.0.0\",\"@progress/kendo-angular-l10n\":\"^2.0.0\",\"@progress/kendo-angular-layout\":\"^5.0.2\",\"@progress/kendo-angular-popup\":\"^3.0.0\",\"@progress/kendo-angular-progressbar\":\"^0.2.3\",\"@progress/kendo-angular-scrollview\":\"^3.0.2\",\"@progress/kendo-drawing\":\"^1.5.12\",\"@progress/kendo-theme-default\":\"^4.19.0\",\"class-transformer\":\"^0.2.3\",\"class-validator\":\"^0.12.2\",\"express-rate-limit\":\"^5.1.3\",\"helmet\":\"^3.23.3\",\"moment\":\"^2.24.0\",\"nswag\":\"^13.6.2\",\"ramda\":\"^0.27.0\",\"reflect-metadata\":\"^0.1.13\",\"rimraf\":\"^3.0.2\",\"rxjs\":\"^6.5.4\",\"service\":\"^0.1.4\",\"swagger-ui-express\":\"^4.1.4\",\"tslib\":\"^1.10.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.901.9\",\"@angular/cli\":\"~9.1.9\",\"@angular/compiler-cli\":\"~9.1.11\",\"@nestjs/cli\":\"^7.0.0\",\"@nestjs/schematics\":\"^7.0.0\",\"@nestjs/testing\":\"^7.0.0\",\"@ngx-rocket/scripts\":\"^4.0.0\",\"@progress/kendo-angular-buttons\":\"^5.4.3\",\"@types/express\":\"^4.17.3\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/jest\":\"25.2.3\",\"@types/node\":\"^13.9.1\",\"@types/ramda\":\"^0.26.6\",\"@types/supertest\":\"^2.0.8\",\"@typescript-eslint/eslint-plugin\":\"3.0.2\",\"@typescript-eslint/parser\":\"3.0.2\",\"angular-cli-ghpages\":\"^0.6.2\",\"codelyzer\":\"^5.1.2\",\"eslint\":\"7.1.0\",\"eslint-config-prettier\":\"^6.10.0\",\"eslint-plugin-import\":\"^2.20.1\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~4.2.1\",\"jest\":\"26.0.1\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~2.1.0\",\"karma-jasmine\":\"~3.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.2\",\"prettier\":\"^1.19.1\",\"protractor\":\"~7.0.0\",\"supertest\":\"^4.0.2\",\"ts-jest\":\"26.1.0\",\"ts-loader\":\"^6.2.1\",\"ts-node\":\"^8.6.2\",\"tsconfig-paths\":\"^3.9.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~3.8.3\"},\"jest\":{\"moduleFileExtensions\":[\"js\",\"json\",\"ts\"],\"rootDir\":\".\",\"testRegex\":\".spec.ts$\",\"transform\":{\"^.+\\\\.(t|j)s$\":\"ts-jest\"},\"coverageDirectory\":\"./coverage\",\"testEnvironment\":\"node\",\"roots\":[\"<rootDir>/apps/\"]}}");

/***/ })
/******/ ]);