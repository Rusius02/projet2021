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

  //date = new Date();
  //formatDate:any;

  constructor(private fb: FormBuilder, public datepipe: DatePipe) { }

  ngOnInit(): void {
   // this.formatDate = this.datepipe.transform(this.date,'yyyy-MM-ddTHH:mm:ss.503');
   // console.log(this.formatDate.toString());
  }

  emitPostCreation() {
    alert("'"+this.form.value.message + "' publié");
    this.postCreated.next({
      message: this.form.value.message,
      idUser:1
    });
  }


}
