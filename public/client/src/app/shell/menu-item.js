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
const class_transformer_1 = require("class-transformer");
class MenuItem {
    get text() {
        return this.title;
    }
    init(_data) {
    }
    toJSON(data) {
    }
}
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], MenuItem.prototype, "icon", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], MenuItem.prototype, "id", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], MenuItem.prototype, "module", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], MenuItem.prototype, "title", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean)
], MenuItem.prototype, "selected", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], MenuItem.prototype, "text", null);
exports.MenuItem = MenuItem;
//# sourceMappingURL=menu-item.js.map