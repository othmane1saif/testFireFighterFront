import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pompier, User} from '../models/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/users/user?id=${id}`);
  }

  getActivePompier() {
    return this.http.get<Pompier>(`${environment.apiUrl}/firefigher/activepompier`);
  }
}
