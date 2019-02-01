import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  _url= 'http://localhost:3000/register';
  constructor(private _http: HttpClient) { }

  register(user: User){
    return this._http.post<any>(this._url, user);
  }
}
