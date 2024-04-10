import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Cake } from 'src/app/types/cake';

@Component({
  selector: 'app-current-cake',
  templateUrl: './current-cake.component.html',
  styleUrls: ['./current-cake.component.css'],
})
export class CurrentCakeComponent implements OnInit {
  cake = {} as Cake;
  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['cakeId'];
      this.apiService.getCake(id).subscribe((cake) => {
        this.cake = cake;
      });
    });
  }
}
