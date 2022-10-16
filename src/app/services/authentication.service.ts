import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, switchMap, tap} from 'rxjs/operators';

const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';
  constructor(private http: HttpClient) {
    this.loadToken();
  }
  async loadToken() {
    const token = await Preferences.get({key: TOKEN_KEY});
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    }
    else {
      this.isAuthenticated.next(false);
    }
  }
  login(credentials: {email; password}): Observable<any> {
    return  this.http.post( 'http://localhost:8080/user/login', credentials)
      .pipe(
      map((data: any) => data.key),
      switchMap (token => from(Preferences.set({key: TOKEN_KEY, value: token}))),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    );
  }
  register(credentials: {email; password}): Observable<any> {
    return  this.http.post('http://localhost:8080/user/register', credentials);
  }
  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return Preferences.remove({key: TOKEN_KEY});
  }
}

