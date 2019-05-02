import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  _GetCourseUrl='http://localhost:3000/getCourseList'
  _PostUpdateUrl='http://localhost:3000/postUpdateData'
  constructor(private _http: HttpClient) { }


  public getData(){
    return this._http.get(this._GetCourseUrl);
  }

  public postUpdate(data){
    return this._http.post(this._PostUpdateUrl,data);
  }

}
