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

  getSubscribers() {
    this.getToken();
    const url = environment.ApiUrl + 'subscribers/';
    return this.http.get<any>(url, this.options)
  }
}
