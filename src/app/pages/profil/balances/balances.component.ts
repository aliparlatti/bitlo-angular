import { Component, OnInit } from '@angular/core';
import { Balance } from '../../../models/general.model';
import { GeneralDataService } from '../../../shared/service/general-data.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.scss'],
})
export class BalancesComponent implements OnInit {
  constructor(private dataService: GeneralDataService) {}
  balances: Balance[] = [] as Balance[];
  checkBoxControl: boolean = true;
  ngOnInit(): void {
    this.dataService.getBalances().subscribe({
      next: (data) => {
        this.balances = data['balances'];
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
