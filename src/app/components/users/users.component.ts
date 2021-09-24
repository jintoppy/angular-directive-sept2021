import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

type User = {
  name: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  isInvalid = false;
  isSubmitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(ngForm: NgForm){

  }


}
