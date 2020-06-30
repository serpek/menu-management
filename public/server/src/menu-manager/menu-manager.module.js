"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const in_memory_db_1 = require("@nestjs-addons/in-memory-db");
const menu_manager_controller_1 = require("./menu-manager.controller");
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
//# sourceMappingURL=menu-manager.module.js.map