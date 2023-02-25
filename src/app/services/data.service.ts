import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, catchError, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  login(user: any, password: any) {
    const url = environment.ApiUrl + 'account/login';

    return this.http.post<any>(url, { UserName: user, Password: password });
  }



}
