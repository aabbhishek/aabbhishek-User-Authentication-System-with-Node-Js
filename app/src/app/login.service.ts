import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class LoginService {
  _loginURL="http://localhost:3000/getLogin"
  constructor(private _http: HttpClient) { }

  getUser(data){
    //post HTTP Server
    return this._http.post<any>(this._loginURL,data);
  }
}
