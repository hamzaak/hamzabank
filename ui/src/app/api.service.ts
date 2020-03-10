import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from './menu-item';

const apiUrlBase = 'http://localhost:5000/menuitems/';
const apiUrlGetItem = 'get/';
const apiUrlGetItems = 'get-all/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getMenuItem(id: Number) : Observable<HttpResponse<MenuItem>> {
    return this.http.get<MenuItem>(
      apiUrlBase + apiUrlGetItem + id, { observe: 'response' });
  }

  getMenuItems() : Observable<HttpResponse<MenuItem[]>> {
    return this.http.get<MenuItem[]>(
      apiUrlBase + apiUrlGetItems, { observe: 'response' });
  }
}
