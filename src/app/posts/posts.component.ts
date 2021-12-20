import { Component, OnInit } from '@angular/core';
import {Post} from"../services/post";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[]=[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }
  private getAllPosts(){
    this.postService.getAll().subscribe(posts => this.posts = posts);
  }
  sendPost(post: Post) {
    this.postService.create(post).subscribe(post => this.posts.push(post));
  }

}
