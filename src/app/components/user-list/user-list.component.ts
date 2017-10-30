import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList:User[];

  constructor(private userlistService:UserListService) { }

  ngOnInit() {
    this.userlistService.getStaticUsers().subscribe(users => {
      this.userList = users;
    });
  }

}
