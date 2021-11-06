import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  form:FormGroup=this.fb.group({
    nom:this.fb.control('',Validators.required),
    prenom:this.fb.control('',Validators.required),
    age:this.fb.control(0,Validators.required),
    mail:this.fb.control('',Validators.required),
    sexe:this.fb.control('',Validators.required),
    motDePasse:this.fb.control('',Validators.required),
    dateAnniv:this.fb.control('',Validators.required),
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
}
