import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser: Observable<any>;
  private currentUserSubject: BehaviorSubject<any>;

  constructor(
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('Token')|| '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(user: any, password: any) {
    const url = environment.ApiUrl + 'account/login';

    return this.http.post<any>(url, { UserName: user, Password: password });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('Token');
    this.currentUserSubject.next(null);
  }

  IsLoggedIn() {
    return !!localStorage.getItem('Token');
  }
}
