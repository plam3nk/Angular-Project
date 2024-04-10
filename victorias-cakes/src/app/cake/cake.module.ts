import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakesListComponent } from './cakes-list/cakes-list.component';
import { CurrentCakeComponent } from './current-cake/current-cake.component';



@NgModule({
  declarations: [
    CakesListComponent,
    CurrentCakeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CakeModule { }
