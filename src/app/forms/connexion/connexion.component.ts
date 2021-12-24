import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthserviceService} from "../../services/authentification/authservice.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../services/authentification/token-storage.service";

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
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private fb:FormBuilder, private authService: AuthserviceService,private router:Router, private  tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  loginProcess():any {
    if(this.form.valid){
      this.authService.login(this.form.value).subscribe(data=>{
        this.tokenStorage.saveToken(data);
        var tokenDecoded = this.tokenStorage.getDecodedToken( data)


        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/about']);
        if(data!=null){
          alert("Vous êtes maintenant connecté");
        }else {
          alert("Erreur lors de la connexion");
        }
      })
    }

  }
  reloadPage(): void {
    window.location.reload();
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


}
