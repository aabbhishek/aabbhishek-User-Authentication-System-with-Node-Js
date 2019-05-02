import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChekSessionService {

  _GetSessionStatusUrl='http://localhost:3000/getSessionStatus';
  constructor(private _http: HttpClient) { }

  sessionChecker(){
    return this._http.get(this._GetSessionStatusUrl);
  }

}
