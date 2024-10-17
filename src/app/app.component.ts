import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  submitted = false;
  defaultSub = 'a'
  user={
    email:'',
    subscription:'',
    password:''
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.signUpForm.value)
    this.user.email=this.signUpForm.value.userData.email;
    this.user.subscription=this.signUpForm.value.userData.subscription;
    this.user.password=this.signUpForm.value.userData.pass;
    
    this.signUpForm.reset();
  }
}
