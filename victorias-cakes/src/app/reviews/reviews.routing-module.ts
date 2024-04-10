import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
  {
    path: 'reviews',
    children: [
      { path: '', pathMatch: 'full', component: ReviewsListComponent },
    ],
  },
  {
    path: 'add-review',
    component: AddReviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsRoutingModule {}
