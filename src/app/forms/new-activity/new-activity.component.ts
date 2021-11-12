import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit {

  form:FormGroup=this.fb.group({
    name:this.fb.control('',Validators.required),
    place:this.fb.control('',Validators.required),
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  autoComplete() {

  }

  getName() {
    return this.controls['name'];
  }



  get controls(){
    return this.form.controls;
  }

  getPlace() {
    return this.controls['place']
  }

}
