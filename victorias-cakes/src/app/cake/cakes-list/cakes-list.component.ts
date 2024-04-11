import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Cake } from 'src/app/types/cake';

@Component({
  selector: 'app-cakes-list',
  templateUrl: './cakes-list.component.html',
  styleUrls: ['./cakes-list.component.css'],
})
export class CakesListComponent implements OnInit {
  isLoading: boolean = true;

  weddingCakes: Cake[] | null = [];
  cupCakes: Cake[] | null = [];
  birthdayCakes: Cake[] | null = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCakes().subscribe((cakes) => {
      for (const cake of cakes) {
        if (cake.cakeType === 'wedding') {
          this.weddingCakes?.push(cake);
        } else if (cake.cakeType === 'birthday') {
          this.birthdayCakes?.push(cake);
        } else if (cake.cakeType === 'cupcake') {
          this.cupCakes?.push(cake);
        }
      }
      this.isLoading = false;
    });
  }
}
