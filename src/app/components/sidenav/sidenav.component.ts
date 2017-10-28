import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  posts:Post[];
  page: number; // the current page
  count: number; // how many total items there are in all pages
  perPage: number; // how many items we want to show per page
  pagesToShow: number; // how many pages between next/prev
  loading: boolean; // check if content is being loaded


  constructor(private sidenavService:DataService){}

  ngOnInit() {
    this.sidenavService.getStaticPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}