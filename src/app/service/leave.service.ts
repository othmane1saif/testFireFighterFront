import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Leave} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http: HttpClient) { }

  getAllLeaves() {
    return this.http.get<Leave[]>(`${environment.apiUrl}/leave/all`);
  }

  saveLeave(dateDebut, dateFin, idUser) {
    return this.http.post(`${environment.apiUrl}/leave/save_leave`, {dateDebut, dateFin, idUser});
  }
}
