import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { ReviewsRoutingModule } from './reviews.routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReviewsListComponent, AddReviewComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ReviewsModule {}
