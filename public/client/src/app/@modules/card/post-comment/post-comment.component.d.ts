import { ScrollViewCard } from "../interface/scrollViewCard";
import { Comment } from "../interface/comment";
export declare class PostCommentComponent {
    card: ScrollViewCard;
    commentLikesCount(comment: any): void;
    commentHeartIcon(comment: Comment): string;
    postComment(card: ScrollViewCard): void;
}
