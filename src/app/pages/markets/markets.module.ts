import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MarketsRoutingModule } from './markets-routing.module';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [CommonModule, MarketsRoutingModule, FormsModule],
})
export class MarketsModule {}
