import { Component, OnInit } from '@angular/core';
import {Post} from"../services/post";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[]=[
    {
      id: 1,
      text:"T'es tendu Natacha!",
      uploadDate:"11/12/2021",
      idUser: 1
    },
    {
      id: 2,
      text: "Comment vont je ?",
      uploadDate: "12/12/2021",
      idUser: 1
    }
  ];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  sendPost(post: Post) {
    this.postService.create(post)
      .subscribe(post => this.posts.push(post));
  }

}
