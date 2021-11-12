import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  form:FormGroup=this.fb.group({
    name:this.fb.control('',Validators.required),
    firstName:this.fb.control('',Validators.required),
    mail:this.fb.control('',Validators.required),
    sexe:this.fb.control('',Validators.required),
    password:this.fb.control('',Validators.required),
    dateAnnif:this.fb.control('',[Validators.required,
      Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]
    ),
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get controls(){
    return this.form.controls;
  }

  sendData() {

  }

  autoComplete() {

  }


  getPassword() {
    return this.controls['password'];
  }

  getAnniv() {
    return this.controls['dateAnniv'];
  }

  getMail() {
    return this.controls['mail'];
  }

  getFirstName() {
    return this.controls['firstName'];
  }

  getName() {
    return this.controls['name'];
  }
}
