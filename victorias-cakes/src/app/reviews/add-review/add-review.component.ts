import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  form = this.fb.group({
    comment: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
    ],
    rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
  });

  constructor(
    private apiService: ApiService,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (!this.userService.isLogged) {
      // If the user is not logged in, navigate them to the login page
      this.router.navigate(['/auth/login']);
    }
  }
  addReview(): void {
    if (this.form.invalid) {
      return;
    }
    debugger;
    const { comment, rating } = this.form.value;
    console.log(comment, rating);

    this.apiService.createReview(comment!, Number(rating)).subscribe(() => {
      this.router.navigate(['/reviews']);
    });
  }
}
