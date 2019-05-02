import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CalldataService {
  _GetCallData="http://localhost:3000/callData";
  _PostCallDataDelRow="http://localhost:3000/calldatadelrow";

  constructor(private _http: HttpClient) { }

  public getData(){
    return this._http.get(this._GetCallData);
  }

  public delRow(id){
    return this._http.post<any>(this._PostCallDataDelRow,id);
  }


}
