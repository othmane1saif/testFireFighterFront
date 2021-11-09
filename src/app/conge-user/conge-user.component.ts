import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LeaveService} from '../service/leave.service';

@Component({
  selector: 'app-conge-user',
  templateUrl: './conge-user.component.html',
  styleUrls: ['./conge-user.component.css']
})
export class CongeUserComponent implements OnInit {

  leaveForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private leaveService: LeaveService) { }

  ngOnInit(): void {
    this.leaveForm = this.formBuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required]
    });
  }

  onSubmit() {
    this.leaveService.saveLeave(this.leaveForm.controls.dateDebut.value, this.leaveForm.controls.dateFin.value,
      JSON.parse(localStorage.getItem('currentUser')).id).
    subscribe(ele => ele);
    this.leaveForm.reset();
  }
}
