import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  id:number;
  name:string;
  username:string;
  email:string;
  alertMessage:string = "This is a required field";
  constructor(private userlistService:UserListService, private fb:FormBuilder){
    this.signupForm = this.fb.group({
      'id': [Math.floor(Math.random() * 100)],
      'name': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'adminValidate': ''
    });
  }

  ngOnInit() {
    this.signupForm.get('adminValidate').valueChanges.subscribe(adminValidation =>{
      if(adminValidation == '1'){
        this.signupForm.get('id').setValue([0]);
      }
      else{
        this.signupForm.get('id').setValue([Math.floor(Math.random() * 100)])
      }
    });
  }

  createUser(myId:number, myName:string, myUsername:string, myEmail:string){
    return this.userlistService.addUser(myId, myName, myUsername, myEmail);
  }
}
