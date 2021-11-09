import {Component, OnInit} from '@angular/core';
import {LeaveService} from '../service/leave.service';
import {Leave} from '../models/user';

@Component({
  selector: 'app-conge-admin',
  templateUrl: './conge-admin.component.html',
  styleUrls: ['./conge-admin.component.css']
})
export class CongeAdminComponent implements OnInit {
  public leaves: Leave[];
  constructor(private leaveService: LeaveService) { }

  ngOnInit(): void {
    this.leaveService.getAllLeaves().subscribe(leaves => this.leaves = leaves);
  }

}
