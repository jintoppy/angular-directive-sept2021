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
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(ngForm: NgForm){
    if(ngForm.form.valid){
      console.log(ngForm.form.value);
    }    
    
    
  }


}
