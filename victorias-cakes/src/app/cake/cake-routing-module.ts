import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakesListComponent } from './cakes-list/cakes-list.component';
import { CurrentCakeComponent } from './current-cake/current-cake.component';

const routes: Routes = [
  {
    path: 'cakes',
    children: [
      { path: '', pathMatch: 'full', component: CakesListComponent },
      { path: ':cakeId', component: CurrentCakeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CakeRoutingModule {}
