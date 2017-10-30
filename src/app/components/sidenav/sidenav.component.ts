import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  posts: Post[];
  page: number;
  totalItems: number = 100;

  constructor(private sidenavService:DataService){}

  ngOnInit() {
    this.sidenavService.getStaticPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}