import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BalancesComponent } from './balances/balances.component';
import {ProfilComponent} from "./profil.component";
import {ProfilRoutingModule} from "./profil-routing.module";
import { DetailComponent } from './detail/detail.component';
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import {FormsModule} from "@angular/forms";
import { OpenOrdersComponent } from './open-orders/open-orders.component';

registerLocaleData(localeTr);

@NgModule({
  declarations: [
    ProfilComponent,
    BalancesComponent,
    DetailComponent,
    OpenOrdersComponent,
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    NgxMaskDirective, NgxMaskPipe, FormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "tr-TR" },provideNgxMask()],
})
export class ProfilModule { }
