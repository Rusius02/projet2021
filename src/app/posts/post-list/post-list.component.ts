import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from"../../services/post";
import {User} from "../../services/user";
import {Comment} from "../../services/comment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts:Post[] = [];
  @Input() users:User[] = [];
  @Output() postDeleted: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() commentCreated: EventEmitter<Comment> = new EventEmitter<Comment>();
  @Input() comments:Comment[] = [];

  hidden: boolean = true;

  form: FormGroup = this.fb.group({
    text : ['', Validators.required]
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  emitCommentCreation(idPost:number) {
    if (idPost===-1) return;
    alert("'"+this.form.value.text + "' publié");
    this.commentCreated.next({
      text: this.form.value.text,
      idUser:2,
      idPost:idPost
    });
    this.clear();
    location.reload();
  }

  clear() {
    this.form.reset();
  }

  deletePost(post:Post, user:User, i:number) {
    this.postDeleted.next(this.posts[i]);
    alert("Post '" + post.message + "' de '"+ user.pseudo + "' supprimé !");
  }
}
