import {ScrollViewItem} from "./scrollViewItem";
import {Comment} from "./comment";

export interface ScrollViewCard {
    thumbnailSrc: string;
    headerTitle: string;
    headerSubtitle: string;
    commentsExpanded: boolean;
    postLiked: boolean;
    comments: Comment[];
    postLikes: number;
    newCommentTextValue: string;
    scrollViewItems: ScrollViewItem[];
}

