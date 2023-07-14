import { Component, OnInit } from '@angular/core';
import { GeneralDataService } from '../../../shared/service/general-data.service';
import { OpenOrder } from '../../../models/general.model';

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html',
  styleUrls: ['./open-orders.component.scss'],
})
export class OpenOrdersComponent implements OnInit {
  openOrders: OpenOrder[] = [] as OpenOrder[];
  constructor(private dataService: GeneralDataService) {}
  ngOnInit(): void {
    this.dataService.getOpenOrders().subscribe({
      next: (data) => {
        this.openOrders = data['openOrders'];
        console.log(this.openOrders);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
