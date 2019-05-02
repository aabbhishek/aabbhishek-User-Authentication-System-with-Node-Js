import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  _RegisterURL="http://localhost:3000/getRegister";
  constructor(private _http: HttpClient) { }

  insertUser(data){
    return this._http.post<any>(this._RegisterURL,data);
  }
}
