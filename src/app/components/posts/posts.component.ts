import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { UserListService } from '../../services/user-list.service';
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
  currentUserEmail:string;

  constructor(private userlistService:UserListService, private postService:DataService, private commentServices: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    /*this.postService.getStaticPosts().subscribe((posts)=>{
      this.posts = posts;
    });*/

    this.userlistService.currentEmail.subscribe(email => {
      this.currentUserEmail = email;
      console.log(email);
    });

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
    let comment: Comment; 
      if(!myComment){
        return;
      }
      if(this.currentUserEmail){
        comment = {
          "postId":"0",
          "id":"0",
          "email":this.currentUserEmail,
          "body":myComment
        }
      }
      else{
        comment = {
          "postId":"0",
          "id":"0",
          "email":"unknown",
          "body":myComment
        }
      }
    this.comments.unshift(comment);
  }
}