import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthserviceService} from "../../services/authservice.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  form: FormGroup = this.fb.group({
    pseudo:this.fb.control('',Validators.required),
    password:this.fb.control('',Validators.required),
  });

  constructor(private fb:FormBuilder, private authService: AuthserviceService) { }

  ngOnInit(): void {
  }

  autoComplete() {

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

  loginProcess() {
    if(this.form.valid){
      this.authService.login(this.form.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert(result.message);
        }else {
          alert(result.message);
        }
      })
    }
  }
}
