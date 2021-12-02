import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit {
  latitude= 50.451714;
  longitude=3.985653;
  latitude2= 50.437950;
  longitude2=3.894009;
  private mylocations = [
    { lat: 7.423568, lng: 80.462287 },
    { lat: 7.532321, lng: 81.021187 },
    { lat: 6.117010, lng: 80.126269 }
  ];


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
