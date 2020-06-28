import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsComponent} from './card.component';
import {ScrollViewCardComponent} from './scroll-view-card/scroll-view-card.component';
import {CommentActionsComponent} from './comment-actions/comment-actions.component';
import {PostCommentComponent} from './post-comment/post-comment.component';
import {ScrollViewModule} from '@progress/kendo-angular-scrollview';
import {LayoutModule} from "@progress/kendo-angular-layout";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ScrollViewModule,
    LayoutModule,
    FormsModule,
  ],
  declarations: [
    CardsComponent,
    ScrollViewCardComponent,
    CommentActionsComponent,
    PostCommentComponent
  ]
})
export class CardModule {
  static entry = CardsComponent;
}
