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
const card_component_1 = require("./card.component");
const scroll_view_card_component_1 = require("./scroll-view-card/scroll-view-card.component");
const comment_actions_component_1 = require("./comment-actions/comment-actions.component");
const post_comment_component_1 = require("./post-comment/post-comment.component");
const kendo_angular_scrollview_1 = require("@progress/kendo-angular-scrollview");
const kendo_angular_layout_1 = require("@progress/kendo-angular-layout");
const forms_1 = require("@angular/forms");
let CardModule = class CardModule {
};
CardModule.entry = card_component_1.CardsComponent;
CardModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            kendo_angular_scrollview_1.ScrollViewModule,
            kendo_angular_layout_1.LayoutModule,
            forms_1.FormsModule,
        ],
        declarations: [
            card_component_1.CardsComponent,
            scroll_view_card_component_1.ScrollViewCardComponent,
            comment_actions_component_1.CommentActionsComponent,
            post_comment_component_1.PostCommentComponent
        ]
    })
], CardModule);
exports.CardModule = CardModule;
//# sourceMappingURL=card.module.js.map