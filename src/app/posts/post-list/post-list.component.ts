import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from"../../services/post";
import {User} from "../../services/user";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts:Post[] = [];
  @Input() users:User[] = [];
  @Output() postDeleted: EventEmitter<Post> = new EventEmitter<Post>();

  hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }



  deletePost(post:Post, user:User, i:number) {
    this.postDeleted.next(this.posts[i]);
    alert("Post '" + post.message + "' de '"+ user.pseudo + "' supprimé !");
  }
}
