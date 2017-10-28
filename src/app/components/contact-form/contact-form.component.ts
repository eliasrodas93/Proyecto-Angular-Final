import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onClick(completename, email){
    if(!completename){
      console.log("No ingreso un valor");
      document.getElementById('nameIsOk').innerHTML="<strong>Warning!</strong> You did not set a name!!!";
    }
    else{
    console.log(completename);
    document.getElementById('nameIsOk').innerHTML="<strong>Congratulation!</strong> Name is OK!!!.";
    }
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      console.log("Email OK");
      document.getElementById('emailIsOk').innerHTML="<strong>Congratulation!</strong> Email is OK!!!.";
    } 
    else{
      console.log("Email not OK");
      document.getElementById('emailIsOk').innerHTML="<strong>Warning!</strong> Your email is incorrect!!!";
    }
    return false;
  }
};
