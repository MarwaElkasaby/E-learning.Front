import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:5062/api';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/category`);
  }

  getCoursesByCategory(categoryId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/category/${categoryId}`);
  }
}