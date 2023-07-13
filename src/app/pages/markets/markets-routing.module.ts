import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {MarketsComponent} from "./markets.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  { path: '',component: MarketsComponent,
    children:[
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '',
        component: ListComponent,
      },
      {
        path:':id',
        component:DetailComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketsRoutingModule { }
