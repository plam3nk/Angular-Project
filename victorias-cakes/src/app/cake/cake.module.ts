import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakesListComponent } from './cakes-list/cakes-list.component';
import { CurrentCakeComponent } from './current-cake/current-cake.component';
import { CakeRoutingModule } from './cake-routing-module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CakesListComponent, CurrentCakeComponent],
  imports: [CommonModule, CakeRoutingModule, SharedModule],
})
export class CakeModule {}
