import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import { User } from '../../interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  username:string;
  email:string;
  alertMessage:string = "This is a required field to verify your user's existence";
  currentUserId:number;
  currentUserUsername:string;
  currentUserEmail:string;
  errorMessage:boolean;
  constructor(private userlistService: UserListService, private fb: FormBuilder){
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
    })
  }

  ngOnInit() {
    this.userlistService.currentId.subscribe(id => {
      this.currentUserId = id;
    });
    this.userlistService.currentUsername.subscribe(username => {
      this.currentUserUsername = username;
    });
    this.userlistService.currentEmail.subscribe(email => {
      this.currentUserEmail = email;
    });
  }

  verifyUser(myUsername:string, myEmail:string){
    this.userlistService.verifyUser(myUsername, myEmail).subscribe(user =>{
      if(user){
        this.userlistService.changeValues(user.id, user.username, user.email);
      }
      else{
        this.errorMessage=false;
      }
    });

  
  }
}
