import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { Response} from "../../models/general.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }


  login(identifier: string, password: string): Observable<Response> {
    return this.http.post<Response>(
      environment.API + 'auth/login',
      {
        identifier,
        password,
      },
      this.httpOptions
    );
  }
  public saveUserStorage (token:string){
    window.sessionStorage.setItem(environment.TOKEN_KEY,token);
  }
  public get isLoggedIn():boolean{
    const token = window.sessionStorage.getItem(environment.TOKEN_KEY);
    return !!token;
}
}
