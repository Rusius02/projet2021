import { Component, OnInit } from '@angular/core';
import {CommentService} from "../services/comments/comment.service";
import {Comment} from "../model/comment";
import {Post} from "../model/post";
import {User} from "../model/user";
import {PostService} from "../services/posts/post.service";
import {UserService} from "../services/users/user.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  //All posts
  posts:Post[]=[];
  //All users
  users: User[]=[];
  //All comments
  comments: Comment[]=[];

  constructor(private postService: PostService, private userService:UserService, private commentService:CommentService) { }

  //Call the getters
  ngOnInit(): void {
    this.getAllPosts();
    this.getAllUsers();
    this.getAllComments();
  }

  //Get all posts
  private getAllPosts(){
    this.postService.getAll().subscribe(posts => this.posts = posts);
  }

  //Get all comments
  private getAllComments(){
    this.commentService.getAll().subscribe(comments => this.comments = comments);
  }

  //Create a new post
  sendPost(post: Post) {
    this.postService.create(post).subscribe(post => this.posts.push(post));
  }

  //Create a new comment
  sendComment(comment: Comment) {
    this.commentService.create(comment).subscribe(comment => this.comments.push(comment));
  }

  //Get all users
  private getAllUsers(){
    this.userService.getAll().subscribe(users => this.users = users);

  }

  //hide or not hide post
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

  //hide or not hide comment
  deleteComment(commentDeleted: Comment) {
    this.commentService.delete(commentDeleted.idComment || -1)
      .subscribe(() => {
        for (let i =0; i <this.comments.length; i++) {
          const comment = this.comments[i];

          if (comment.idComment === commentDeleted.idComment) {
            this.comments.splice(i, 1);
            break;
          }
        }
      });
  }

}
