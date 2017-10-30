import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private createPostService:DataService){
  }

  ngOnInit() {
  }

  addPost(postTitle:string, postBody:string){
    return this.createPostService.addStaticPosts(postTitle,postBody);
  }
}
