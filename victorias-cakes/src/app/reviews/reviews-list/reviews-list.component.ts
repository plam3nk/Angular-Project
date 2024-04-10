import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Review } from 'src/app/types/review';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit{
  reviews: Review[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
      this.api.getReviews().subscribe((reviews)=> {
        this.reviews = reviews;
        
        this.isLoading = false
      })
  }

}
