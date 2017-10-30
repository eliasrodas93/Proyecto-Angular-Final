import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUserId:number;
  currentUserUsername:string;
  currentUserEmail:string;

  constructor(private userlistService:UserListService){
  }

  ngOnInit() {
    this.userlistService.currentId.subscribe(id => {
      this.currentUserId = id;
      console.log(id);
    });
    this.userlistService.currentUsername.subscribe(username => {
      this.currentUserUsername = username;
      console.log(username);
    });
    this.userlistService.currentEmail.subscribe(email => {
      this.currentUserEmail = email;
      console.log(email);
    });
  }

  signOut(){
    let id:number = null;
    let username:string = ''; 
    let email:string = '';
    this.userlistService.changeValues(id, username, email);
  }
}
