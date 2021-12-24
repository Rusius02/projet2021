import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/model/post';
import { DatePipe } from '@angular/common';
import {TokenStorageService} from "../../services/authentification/token-storage.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() postCreated: EventEmitter<Post> = new EventEmitter<Post>();

  form:FormGroup = this.fb.group({
    message : ['', Validators.required]
  });


  constructor(private fb: FormBuilder, public datepipe: DatePipe, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }

  emitPostCreation() {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    alert("'"+this.form.value.message + "' publié");
    this.postCreated.next({
      message: this.form.value.message,
      idUser:Number(tokenDecoded.nameid)
    });
    this.clear();
    location.reload();
  }

  clear() {
    this.form.reset();
  }
}
