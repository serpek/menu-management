import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ScrollViewCard} from "../interface/scrollViewCard";
import {Comment} from "../interface/comment";

@Component({
  selector: 'post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostCommentComponent {
  @Input() public card: ScrollViewCard;

  public commentLikesCount(comment: any): void {
    if (comment.likes > 0) {
      comment.likes -= 1;
    } else {
      comment.likes += 1;
    }
  }

  public commentHeartIcon(comment: Comment): string {
    if (comment && comment.likes > 0) {
      return 'k-icon k-i-heart';
    } else {
      return 'k-icon k-i-heart-outline';
    }
  }

  public postComment(card: ScrollViewCard): void {
    if (card.newCommentTextValue) {
      const comment = {text: card.newCommentTextValue, likes: 0};
      card.comments.push(comment);
      card.newCommentTextValue = '';
    }
  }
}
