import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, catchError, map, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public options: any;

  constructor(private http: HttpClient) {}

  getToken() {
    const token = JSON.parse(localStorage.getItem('Token') || '{}');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    this.options = { headers: headers };
  }

  getSubscribers(page: number) {
    this.getToken();
    const url = `${environment.ApiUrl}subscribers/?count=8&page=${page}`;
    return this.http.get<any>(url, this.options);
  }

  getSubscriber(id:number) {
    this.getToken();
    const url = `${environment.ApiUrl}subscribers/${id}`;
    return this.http.get<any>(url, this.options);
  }

  getCodes() {
    this.getToken();
    const url = `${environment.ApiUrl}countries/`;
    return this.http.get<any>(url, this.options);
  }

  updateSubscriber(data:any, id:number) {
    console.log(id)
    this.getToken();
    const url = `${environment.ApiUrl}subscribers/${id}`;
    return this.http.put<any>(url, data,this.options);
  }
}
