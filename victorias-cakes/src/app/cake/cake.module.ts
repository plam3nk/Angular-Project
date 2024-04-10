import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakesListComponent } from './cakes-list/cakes-list.component';
import { CurrentCakeComponent } from './current-cake/current-cake.component';
import { CakeRoutingModule } from './cake-routing-module';

@NgModule({
  declarations: [CakesListComponent, CurrentCakeComponent],
  imports: [CommonModule, CakeRoutingModule],
})
export class CakeModule {}
