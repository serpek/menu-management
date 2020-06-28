import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ScrollViewCard} from "../interface/scrollViewCard";

@Component({
  selector: 'scrollview-card',
  templateUrl: './scroll-view-card.component.html',
  styleUrls: ['./scroll-view-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScrollViewCardComponent {
  @Input() public card: ScrollViewCard;

}
