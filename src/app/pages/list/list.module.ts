import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../shared/pipes/filter.pipe';


@NgModule({
  declarations: [ListComponent, FilterPipe],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule
  ]
})
export class ListModule { }
