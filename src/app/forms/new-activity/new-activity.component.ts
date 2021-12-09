import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit {

  formHide=false;
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
    date:this.fb.control('',Validators.required),
    sport:this.fb.control('',Validators.required)
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

  }
  autoComplete() {
    if(environment.production){
      return;
    }
    //patchvalue n'oblige pas de tout initialiser, au contraire de setvalue
    this.form.setValue({
      name:"Roger",
      place:"Rue du Roi Albert, 23 7800 Mons",
      date: "2022-01-12T17:12",
      sport:"Football"
    })
  }

  getName() {
    return this.controls['name'];
  }
  getDate() {
    return this.controls['date'];
  }
  getSport() {
    return this.controls['sport'];
  }
  get controls(){
    return this.form.controls;
  }

  getPlace() {
    return this.controls['place']
  }


  hide() {
    this.formHide=!this.formHide;
  }
}
