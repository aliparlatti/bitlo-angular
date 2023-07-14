import { Component } from '@angular/core';
import { Market } from '../../../models/general.model';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  market: Market = {} as Market;
  imgCode: string = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routeData = this.router?.getCurrentNavigation()?.extras;
        this.market = routeData?.state as Market;
        if (this.market) {
          this.market.marketCode = this.market.marketCode.replace('-', ' / ');
          this.imgCode = this.market.marketCode
            .split('/')[0]
            .replace(/\s/g, '')
            .toLowerCase();
        }
      }
    });
  }
}
