import { Component, OnInit } from '@angular/core';
import {Post} from "../model/post";
import {PostService} from "../services/posts/post.service";
import {User} from "../model/user";
import {UserService} from "../services/users/user.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[]=[];
  users: User[]=[];

  constructor(private postService: PostService, private userService:UserService) { }

  ngOnInit(): void {
    this.getAllPosts();
    this.getAllUsers();
  }
  private getAllPosts(){
    this.postService.getAll().subscribe(posts => this.posts = posts);
    console.log(this.posts);
  }
  sendPost(post: Post) {
    this.postService.create(post).subscribe(post => this.posts.push(post));
  }

  private getAllUsers(){
    this.userService.getAll().subscribe(users => this.users = users);

  }

}
