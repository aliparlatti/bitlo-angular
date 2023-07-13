import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BalancesComponent} from "./balances/balances.component";
import {DetailComponent} from "./detail/detail.component";
import {ProfilComponent} from "./profil.component";
import {OpenOrdersComponent} from "./open-orders/open-orders.component";

const routes: Routes = [
  { path: '',component: ProfilComponent,
    children:[
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '',
        component: DetailComponent,
      },
      {
        path:'bakiyeler',
        component:BalancesComponent
      },
      {
        path:'acik-emirler',
        component:OpenOrdersComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
