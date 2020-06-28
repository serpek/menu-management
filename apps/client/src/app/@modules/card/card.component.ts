import {Component, ViewEncapsulation} from '@angular/core';
import {ScrollViewCard} from './interface/scrollViewCard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardsComponent {
  public scrollViewCards: Array<ScrollViewCard> = [
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
        {"url": "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/kukeri.jpg"},
        {"url": "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/martenitsa.jpg"},
        {"url": "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg"}
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
        {url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg'},
        {url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/pamporovo.jpg'},
        {url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/camping.jpg'}
      ]
    }
  ];

  constructor() {
  }
}
