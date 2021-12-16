import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/services/post';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  emitPostCreation() {
    alert("Post publié");
    this.postCreated.next({
      message: this.form.value.message,
      uploadDate:"15-12-21",
      idUser:1
    });
  }


}
