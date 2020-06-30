"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const splitter_component_1 = require("./splitter.component");
const kendo_angular_layout_1 = require("@progress/kendo-angular-layout");
let SplitterModule = class SplitterModule {
};
SplitterModule.entry = splitter_component_1.SplitterComponent;
SplitterModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            kendo_angular_layout_1.LayoutModule
        ],
        declarations: [splitter_component_1.SplitterComponent]
    })
], SplitterModule);
exports.SplitterModule = SplitterModule;
//# sourceMappingURL=splitter.module.js.map