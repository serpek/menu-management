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
const common_1 = require("@nestjs/common");
const in_memory_db_1 = require("@nestjs-addons/in-memory-db");
const swagger_1 = require("@nestjs/swagger");
const menu_entity_1 = require("./menu.entity");
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
//# sourceMappingURL=menu-manager.controller.js.map