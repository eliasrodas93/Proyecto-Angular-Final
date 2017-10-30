import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm:FormGroup;
  name:string;
  email:string;
  comment:string;
  country:string;
  successMessage:boolean = false;
  alertMessage:string = "This is a required field";
  constructor(private fb:FormBuilder){
    this.contactForm = fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'comment': ['', Validators.required],
      'country': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onClick(name:string, email:string, comment:string, country:string,){
    this.successMessage=true;
  }
}
