import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Review } from 'src/app/types/review';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css'],
})
export class ReviewsListComponent implements OnInit {
  reviews: Review[] = [];
  isLoading: boolean = true;
  htmlStar = '&#9733;';

  constructor(private api: ApiService) {}

  getStars(rating: number): any[] {
    return Array.from({ length: rating }, (_, index) => index); // Generates an array of length `rating`
  }

  ngOnInit(): void {
    this.api.getReviews().subscribe((reviews) => {
      this.reviews = reviews;

      this.isLoading = false;
    });
  }
}
