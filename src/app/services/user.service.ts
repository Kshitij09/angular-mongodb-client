import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public API = 'http://localhost:8095';
  public ALL_USERS = 'users/all';

  constructor(private http: HttpClient) { }
  public getAll(): Observable<User> {
    return this.http.get<User>(`${this.API}/${this.ALL_USERS}`);
  }
}
