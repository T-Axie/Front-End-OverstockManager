import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import {IUser} from '../models/IUser';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';
import {AuthenticationService} from './authentication.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient, private _route: ActivatedRoute, private _authenticator: AuthenticationService) { }
  get token(): string | null {
    return this._authenticator.token;
  }
  get authHeader(): HttpHeaders {
    return new HttpHeaders().append('Authorization', `Bearer ${this.token}`);
  }
  getUser(): Observable<any> {
    return this._http.get<any>(
      environment.api.toolManager+`/user/myProfile`,
      {
     headers: this.authHeader });
  }
  update(form: any): Observable<any> {
    return this._http.patch<any>(
      environment.api.toolManager+`/user/update`,
      form,
      {
        headers: this.authHeader });
  }
}
