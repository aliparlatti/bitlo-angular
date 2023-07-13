import {Component, OnInit} from '@angular/core';
import {Me} from "../../../models/general.model";
import {GeneralDataService} from "../../../shared/service/general-data.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit{
  user: Me = {} as Me;
  constructor(private dataService:GeneralDataService) {

      this.dataService.getUserData().subscribe({
        next: data => {
          this.user=data["me"]
        },
        error:e =>{
          console.log(e)
        }
      });

  }
  ngOnInit(): void {
  }

}
