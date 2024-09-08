import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private _HttpClient:HttpClient) { }
 baseURL='http://localhost:5062';

  getAllCourses():Observable<any>
  {
    return this._HttpClient.get(`${this.baseURL}/api/Course/GetAllCourses`)
  }
}
