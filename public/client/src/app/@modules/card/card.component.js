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
let CardsComponent = class CardsComponent {
    constructor() {
        this.scrollViewCards = [
            {
                "thumbnailSrc": "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg",
                "headerTitle": "bg_traditions",
                "headerSubtitle": "Bulgaria, Europe",
                "commentsExpanded": false,
                "postLiked": false,
                "comments": [],
                "postLikes": 674,
                "newCommentTextValue": "",
                "scrollViewItems": [
                    { "url": "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/kukeri.jpg" },
                    { "url": "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/martenitsa.jpg" },
                    { "url": "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg" }
                ]
            },
            {
                thumbnailSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila_lakes.jpg',
                headerTitle: 'bg_mountains',
                headerSubtitle: 'Bulgaria, Europe',
                commentsExpanded: false,
                postLiked: false,
                comments: [],
                newCommentTextValue: '',
                postLikes: 962,
                scrollViewItems: [
                    { url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg' },
                    { url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/pamporovo.jpg' },
                    { url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/camping.jpg' }
                ]
            }
        ];
    }
};
CardsComponent = __decorate([
    core_1.Component({
        selector: 'app-card',
        templateUrl: './card.component.html',
        styleUrls: ['./card.component.scss'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], CardsComponent);
exports.CardsComponent = CardsComponent;
//# sourceMappingURL=card.component.js.map