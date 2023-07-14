import { Component } from '@angular/core';
import { Market } from '../../../models/general.model';
import { GeneralDataService } from '../../../shared/service/general-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  markets: Market[] = [] as Market[];
  filteredMarkets: Market[] = [] as Market[];
  filterValue: string = '';
  positiveCount: number = 0;
  positiveMarket: Market = {} as Market;
  negativeMarket: Market = {} as Market;
  count10000: number = 0;
  count1: number = 0;
  arithmeticMean: number = 0;
  btcPrice: number = 0;
  constructor(private dataService: GeneralDataService) {}

  ngOnInit(): void {
    this.dataService.getMarkets().subscribe({
      next: (data) => {
        this.markets = data;
        this.filteredMarkets = this.markets;
        this.calculateValues();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  filterMarkets(): void {
    this.filteredMarkets = this.markets.filter((market) =>
      market.marketCode.includes(this.filterValue)
    );
    this.calculateValues();
  }
  calculateValues(): void {
    if (this.filteredMarkets.length > 0) {
      this.positiveCount = this.filteredMarkets.filter(
        (market) => market.change24hPercent > 0
      ).length;
      this.positiveMarket = this.filteredMarkets.reduce((prev, current) =>
        +prev.change24hPercent > +current.change24hPercent ? prev : current
      );
      this.negativeMarket = this.filteredMarkets.reduce((prev, current) =>
        +prev.change24hPercent < +current.change24hPercent ? prev : current
      );
      this.count10000 = this.filteredMarkets.filter(
        (market) => market.currentQuote > 10000
      ).length;
      this.count1 = this.filteredMarkets.filter(
        (market) => market.currentQuote > 1
      ).length;
      let currentQuote = 0;
      this.markets.forEach((market) => {
        currentQuote += parseFloat(String(market.currentQuote));
      });
      this.arithmeticMean = currentQuote / this.markets.length;
      let btc = this.markets.find((market) => market.marketCode === 'BTC-TRY');
      let usd = this.markets.find((market) => market.marketCode === 'USDT-TRY');
      // @ts-ignore
      this.btcPrice = btc?.currentQuote / usd?.currentQuote;
    }
  }
}
