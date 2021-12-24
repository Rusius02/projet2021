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

  //All posts
  @Input() posts:Post[] = [];
  //All users
  @Input() users:User[] = [];
  //Create a new post
  @Output() postDeleted: EventEmitter<Post> = new EventEmitter<Post>();
  //Create a new comment
  @Output() commentCreated: EventEmitter<Comment> = new EventEmitter<Comment>();
  //Delete a comment
  @Output() commentDeleted : EventEmitter<Comment> = new EventEmitter<Comment>();
  //All comments
  @Input() comments:Comment[] = [];

  //boolean to hide or not hide posts
  hidden: boolean = true;
  //boolean to hide or not hide comments
  hiddenComment: boolean = true;

  //Form for create a new comment
  form: FormGroup = this.fb.group({
    text : ['', Validators.required]
  })

  constructor(private fb:FormBuilder, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }

  //Create a new comment
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

  //Clear form comment
  clear() {
    this.form.reset();
  }

  //Delete a post
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

  //Delete a comment
  deleteComment(i:number) {
    this.commentDeleted.next(this.comments[i]);
  }

  //hide or not hide post
  changeHidden(post:Post) {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    for (let user of this.users) {
      if (post.idUser==tokenDecoded.nameid || (user.id == tokenDecoded.nameid && user.role == "admin")) {
        this.hidden=false;
        break;
      }
      else {
        this.hidden=true;
      }
    }
    return this.hidden;
  }

  //hide or not hide comment
  changeHiddenComment(comment: Comment) {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    for (let user of this.users) {
      if (comment.idUser == tokenDecoded.nameid || (user.id == tokenDecoded.nameid && user.role == "admin")) {
        this.hiddenComment = false;
        break;
      } else {
        this.hiddenComment = true;
      }
    }
    return this.hiddenComment;
  }

}
