import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./shared/auth/auth.guard";
import {LogoutComponent} from "./pages/logout/logout.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:"full"
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch:"full"
  },
  {
    path: 'logout',
    component: LogoutComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  },
  {
    path: 'marketler',
    loadChildren: () =>
      import("./pages/markets/markets.module").then(
        (m) => m.MarketsModule
      ),
  },
  {
    path: 'profil',
    loadChildren: () =>
      import("./pages/profil/profil.module").then(
        (m) => m.ProfilModule
      ),
    canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
