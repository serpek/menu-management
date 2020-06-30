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
const stepper_component_1 = require("./stepper.component");
const kendo_angular_layout_1 = require("@progress/kendo-angular-layout");
let StepperModule = class StepperModule {
};
StepperModule.entry = stepper_component_1.StepperComponent;
StepperModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            kendo_angular_layout_1.LayoutModule
        ],
        declarations: [stepper_component_1.StepperComponent]
    })
], StepperModule);
exports.StepperModule = StepperModule;
//# sourceMappingURL=stepper.module.js.map