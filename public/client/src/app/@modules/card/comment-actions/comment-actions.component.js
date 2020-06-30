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
let CommentActionsComponent = class CommentActionsComponent {
    constructor() {
    }
    commentClick(card) {
        card.commentsExpanded = !card.commentsExpanded;
    }
    postLikesCount(card) {
        if (card.postLiked) {
            card.postLikes -= 1;
        }
        else {
            card.postLikes += 1;
        }
        card.postLiked = !card.postLiked;
    }
    postHeartIcon(card) {
        return card.postLiked ? 'k-icon k-i-heart' : 'k-icon k-i-heart-outline';
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CommentActionsComponent.prototype, "card", void 0);
CommentActionsComponent = __decorate([
    core_1.Component({
        selector: 'comment-actions',
        templateUrl: './comment-actions.component.html',
        styleUrls: ['./comment-actions.component.scss'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], CommentActionsComponent);
exports.CommentActionsComponent = CommentActionsComponent;
//# sourceMappingURL=comment-actions.component.js.map