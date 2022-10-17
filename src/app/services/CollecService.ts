// @ts-ignore

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
export class CollecService {

  constructor(private _http: HttpClient, private _route: ActivatedRoute, private _authenticator: AuthenticationService) { }
  get token(): string | null {
    return this._authenticator.token;
  }
  get authHeader(): HttpHeaders {
    return new HttpHeaders().append('Authorization', `Bearer ${this.token}`);
  }
  getALL(): Observable<any> {
    return this._http.get<any>(
      environment.api.toolManager+`/collect/all`,
      {
        headers: this.authHeader });
  }
  create(credentials: {name; type}): Observable<any> {
    return this._http.post(environment.api.toolManager+'/collect', credentials,{
      headers: this.authHeader });
  }
  delete(num: any): Observable<any> {
    return this._http.delete(environment.api.toolManager+'/collect/' + num,{
      headers: this.authHeader });
  }

  restock(num: any): Observable<any> {
    return this._http.get(environment.api.toolManager+'/mkm/restock/' + num,{
      headers: this.authHeader });
  }

  initializeStock() {
    return this._http.get(environment.api.toolManager+'/mkm/getStockDemo',{
      headers: this.authHeader });
  }
}
