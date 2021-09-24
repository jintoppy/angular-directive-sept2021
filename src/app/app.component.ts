import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directive';

  usernameVal: string  = '';
  color = 'green';
  users = [{
    name: 'Rajnikanth'
  },
  {
    name: 'Ajith'
  },
  {
    name: 'Vijay'
  }]

  onSubmit(ngForm: NgForm){
    console.log(ngForm.form.value);
  }
}
