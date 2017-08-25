import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public router: Router) { }


  ngOnInit() {
    $( function() {
      $( "#accordion" ).accordion();
    } );
  }
  onFormSubmit(userForm: NgForm) {
    console.log(userForm.value);
console.log('Name:' + userForm.controls['name'].value);
    console.log('Form Valid:' + userForm.valid);
console.log('Form Submitted:' + userForm.submitted);
}
resetUserForm(userForm: NgForm) {
    userForm.resetForm();;
}
login(){
  this.router.navigate([ "/login" ])
}
}
