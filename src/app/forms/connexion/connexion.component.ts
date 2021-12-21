import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthserviceService} from "../../services/authservice.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  form: FormGroup = this.fb.group({
    pseudo:this.fb.control('',Validators.required),
    password:this.fb.control('',Validators.compose([
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.required
    ]))
  });
  token:any;

  constructor(private fb:FormBuilder, private authService: AuthserviceService) { }

  ngOnInit(): void {
  }

  autoComplete() {
    if(environment.production){
      return;
    }
    this.form.setValue({
      pseudo:"TheGamers",
      password:"TheGamers1",
    })
  }

  getPseudo() {
    return this.controls['pseudo'];
  }
  getPassword() {
    return this.controls['password'];
  }
  get controls(){
    return this.form.controls;
  }

  loginProcess():any {

    if(this.form.valid){
       this.authService.login(this.form.value).subscribe(result=>{
        this.token=result;
        if(result!=null){
          console.log(result);
          alert("Vous êtes maintenant connecté");
        }else {
          console.log(result);
          alert("Erreur lors de la connexion");
        }
      })
    }
  }
}
