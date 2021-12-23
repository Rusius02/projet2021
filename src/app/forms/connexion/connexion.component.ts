import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthserviceService} from "../../services/authentification/authservice.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

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

  constructor(private fb:FormBuilder, private authService: AuthserviceService,private router:Router) { }

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
        this.router.navigate(['/about']);
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
