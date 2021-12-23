import { Component, OnInit } from '@angular/core';
import {Post} from"../services/post";
import {PostService} from "../services/post.service";
import {User} from "../services/user";
import {UserService} from "../services/user.service";
import {CommentService} from "../services/comment.service";
import {Comment} from "../services/comment";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[]=[];
  users: User[]=[];
  comments: Comment[]=[];

  constructor(private postService: PostService, private userService:UserService, private commentService:CommentService) { }

  ngOnInit(): void {
    this.getAllPosts();
    this.getAllUsers();
    this.getAllComments();
  }

  private getAllPosts(){
    this.postService.getAll().subscribe(posts => this.posts = posts);
  }

  private getAllComments(){
    this.commentService.getAll().subscribe(comments => this.comments = comments);
  }

  sendPost(post: Post) {
    this.postService.create(post).subscribe(post => this.posts.push(post));
  }

  sendComment(comment: Comment) {
    this.commentService.create(comment).subscribe(comment => this.comments.push(comment));
  }

  private getAllUsers(){
    this.userService.getAll().subscribe(users => this.users = users);

  }

  deletePost(postDeleted: Post) {
    this.postService.delete(postDeleted.id || -1)
      .subscribe(() => {
        for (let i =0; i <this.posts.length; i++) {
          const post = this.posts[i];

          if (post.id === postDeleted.id) {
            this.posts.splice(i, 1);
            break;
          }
        }
      });
  }

}
