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
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const contact_entity_1 = require("./contact.entity");
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
//# sourceMappingURL=contacts.controller.js.map