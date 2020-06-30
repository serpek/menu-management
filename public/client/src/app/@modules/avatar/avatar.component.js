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
const core_1 = require("@angular/core");
const api_service_1 = require("../../@core/services/api.service");
const ramda_1 = require("ramda");
let AvatarComponent = class AvatarComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    async ngOnInit() {
        const response = await this.apiService.getContacts().toPromise();
        if (!ramda_1.isEmpty(response)) {
            this.contacts = response;
        }
    }
};
AvatarComponent = __decorate([
    core_1.Component({
        selector: 'app-avatar',
        templateUrl: './avatar.component.html',
        styleUrls: ['./avatar.component.scss']
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], AvatarComponent);
exports.AvatarComponent = AvatarComponent;
//# sourceMappingURL=avatar.component.js.map