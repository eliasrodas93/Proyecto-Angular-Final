import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlicePipe } from '@angular/common';

import { DataService } from '../../services/data.service';
import { Post } from '../../interfaces/post.interface';
import { Comment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  //posts:Post[];
  comments:Comment[];
  post:any;
  end:number;

  constructor(private postService:DataService, private commentServices: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    /*this.postService.getStaticPosts().subscribe((posts)=>{
      this.posts = posts;
    });*/

    this.commentServices.getComments().subscribe((comments) => {
      this.comments=comments;
    });

    this.route.params.subscribe((params) => {
      let id = params["id"];
      this.getId(id);
    });
  }

  getId(id:number){
    this.postService.getStaticPostId(id).subscribe((postId) => {
      console.log(postId);
      this.post = postId;
    });
  }

  addComment(myComment:string){
    let comment = {
      "postId":"0",
      "id":"0",
      "email":"lol",
      "body":myComment
    }
    if(!myComment){
      return;
    }
    this.comments.unshift(comment);
  }
}