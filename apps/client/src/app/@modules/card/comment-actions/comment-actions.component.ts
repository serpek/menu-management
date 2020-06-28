import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ScrollViewCard} from "../interface/scrollViewCard";

@Component({
  selector: 'comment-actions',
  templateUrl: './comment-actions.component.html',
  styleUrls: ['./comment-actions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommentActionsComponent {
  @Input() public card: ScrollViewCard;

  constructor() {
  }

  public commentClick(card: ScrollViewCard): void {
    card.commentsExpanded = !card.commentsExpanded;
  }

  public postLikesCount(card: ScrollViewCard): void {
    if (card.postLiked) {
      card.postLikes -= 1;
    } else {
      card.postLikes += 1;
    }

    card.postLiked = !card.postLiked;
  }

  public postHeartIcon(card: ScrollViewCard): string {
    return card.postLiked ? 'k-icon k-i-heart' : 'k-icon k-i-heart-outline';
  }
}
