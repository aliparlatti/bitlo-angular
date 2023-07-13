import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Market, Response} from "../../models/general.model";
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class GeneralDataService {

  httpOptions = {
    headers: new HttpHeaders({ 'x-bitlo-auth': window.sessionStorage.getItem(environment.TOKEN_KEY) || '', })
  };
  constructor(private http:HttpClient) { }

  getBalances():Observable<Response>{
    return this.http.post<Response>(
      environment.API + 'auth/balances',
      {},
      this.httpOptions
    );
  }
  getOpenOrders():Observable<Response>{
    return this.http.post<Response>(
      environment.API + 'auth/open-orders',
      {},
      this.httpOptions
    );
  }
  getMarkets():Observable<Market[]>{
    return this.http.get<Market[]>(
      environment.API + 'markets',
    );
  }
  getUserData():Observable<Response>{
    return this.http.post<Response>(
      environment.API + 'auth/me',
      {},
      this.httpOptions
    );
  }
}
