import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Comment} from "../../model/comment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../model/post";
import {User} from "../../model/user";
import {TokenStorageService} from "../../services/authentification/token-storage.service";

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
  @Output() commentDeleted : EventEmitter<Comment> = new EventEmitter<Comment>();
  @Input() comments:Comment[] = [];

  hidden: boolean = true;
  hiddenComment: boolean = true;

  form: FormGroup = this.fb.group({
    text : ['', Validators.required]
  })


  constructor(private fb:FormBuilder, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }

  emitCommentCreation(idPost:number) {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    if (idPost===-1) return;
    alert("'"+this.form.value.text + "' envoyé");
    this.commentCreated.next({
      text: this.form.value.text,
      idUser:Number(tokenDecoded.nameid),
      idPost:idPost
    });
    this.clear();
    location.reload();
  }

  clear() {
    this.form.reset();
  }

  deletePost(post:Post, user:User, i:number) {
    let j=0;
    this.postDeleted.next(this.posts[i]);
    for (let comment of this.comments) {

      if (comment.idPost===post.id) {
        this.deleteComment(j);
      }
      j++;
    }
    alert("Post '" + post.message + "' de '"+ user.pseudo + "' supprimé !");
  }

  deleteComment(i:number) {
    this.commentDeleted.next(this.comments[i]);
  }

  changeHidden(post:Post) {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    if (post.idUser==tokenDecoded.nameid) {
        this.hidden=false;
    }
    else {
      this.hidden=true;
    }
    return this.hidden;
  }

  changeHiddenComment(comment: Comment) {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    console.log( "Bonjour ::::::::::     "  +  comment.idUser===tokenDecoded.nameid);
    if (comment.idUser==tokenDecoded.nameid) {
      this.hiddenComment=false;
    }
    else {
        this.hiddenComment=true;
    }
    return this.hiddenComment;
  }

}
