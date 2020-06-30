import { ScrollViewCard } from "../interface/scrollViewCard";
export declare class CommentActionsComponent {
    card: ScrollViewCard;
    constructor();
    commentClick(card: ScrollViewCard): void;
    postLikesCount(card: ScrollViewCard): void;
    postHeartIcon(card: ScrollViewCard): string;
}
