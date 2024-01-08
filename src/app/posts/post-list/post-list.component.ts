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

  hiddenPost: boolean = true;

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

  setHiddenPost() {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    if(tokenDecoded ==null) {
      this.hiddenPost = false;
    }
    return this.hiddenPost;
  }

  parseCustomDate(dateString: string): Date {
    if (!dateString) {
      return new Date(); // Retourne la date actuelle si dateString est undefined
    }

    const parts = dateString.split(' ');
    if (parts.length !== 2) {
      return new Date(); // Retourne la date actuelle si le format est incorrect
    }

    const [dayMonthYear, time] = parts;
    const [day, month, year] = dayMonthYear.split('/');
    const [hours, minutes, seconds] = time.split(':');

    return new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);
  }

  convertDate(dateString: string): string {
    if (!dateString) {
      return 'Date non définie';
    }

    const currentDate = new Date();
    const date = this.parseCustomDate(dateString);
    const today = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const dayOfWeek = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

    // Si c'est aujourd'hui
    if (date.toDateString() === today.toDateString()) {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }

    // Si c'était cette semaine
    if (date > new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)) {
      const day = dayOfWeek[date.getDay()];
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${day} ${hours}:${minutes}`;
    }

    // Si c'était cette année
    if (date.getFullYear() === currentDate.getFullYear()) {
      const month = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(date);
      const day = date.getDate();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${day} ${month}, ${hours}:${minutes}`;
    }

    // Si c'était avant cette année
    const month = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(date);
    const year = date.getFullYear();
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day} ${month} ${year}, ${hours}:${minutes}`;
  }
  
  reverse(posts: Post[]): Post[] {
    return posts.reverse();
  }

  getPosts(posts: Post[], users: User[]): Post[] {
    let posts_user=[]
    for (let post of posts) {
      for (let user of users) {
        if (user.id===post.idUser) {
          posts_user.push(post);
        }
      }
    }
    return posts;
  }

  getComments(post: Post, comments: Comment[], users: User[]): Comment[] {
    let comments_user=[]
    for (let comment of comments) {
      if (post.id===comment.idPost) {
        for (let user of users) {
          if (user.id===comment.idUser) {
            comments_user.push(comment);
          }
        } 
      }
    }
    return comments_user;
  }

  getUserOfComment(comment: Comment, users: User[]): User|undefined {
    for (let user of users) {
      if (user.id===comment.idUser) {
        return user;
      }
    } 
    return undefined
  }

  getPseudoUserOfComment(comment:Comment, users: User[]): string{
    let user =  this.getUserOfComment(comment, users)
    return user ? user.pseudo : ""; 
  }

  getUserOfPost(post: Post, users: User[]): User|undefined {
    for (let user of users) {
      if (user.id===post.idUser) {
        return user;
      }
    } 
    return undefined
  }

  getPseudoUserOfPost(post: Post, users: User[]): string{
    let user =  this.getUserOfPost(post, users)
    return user ? user.pseudo : ""; 
  }

}
