import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Pompier, User} from '../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[];
  activePompier: Pompier;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => this.users = users);
    this.getActivePompier();
  }

  getActivePompier() {
    this.userService.getActivePompier().subscribe(pomp => this.activePompier = pomp);
    return this.activePompier;
  }

}
