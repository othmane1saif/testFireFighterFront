import { Component, OnInit } from '@angular/core';
import {Pompier, User} from '../models/user';
import {first} from 'rxjs/operators';
import {UserService} from '../service/user.service';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  loading = false;
  currentUser: User;
  userFromApi: User;
  activePompier: Pompier;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    });
    this.getActivePompier();
  }

  getActivePompier() {
    this.userService.getActivePompier().subscribe(pomp => this.activePompier = pomp);
    return this.activePompier;
  }

}
