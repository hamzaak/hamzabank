import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from './menu-item';

const apiUrl = 'http://localhost:5000/menuitems/get-all';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getMenuItems() : Observable<HttpResponse<MenuItem[]>> {
    return this.http.get<MenuItem[]>(
      apiUrl, { observe: 'response' });
  }
}
