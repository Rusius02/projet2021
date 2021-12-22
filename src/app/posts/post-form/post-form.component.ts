import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/services/post';
import { DatePipe } from '@angular/common';

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


  constructor(private fb: FormBuilder, public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  emitPostCreation() {
    alert("'"+this.form.value.message + "' publié");
    this.postCreated.next({
      message: this.form.value.message,
      idUser:1
    });
    this.clear();
    location.reload();
  }

  clear() {
    this.form.reset();
  }
}
