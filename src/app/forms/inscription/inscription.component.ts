import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {UserService} from "../../services/user.service";
import {User} from "../../services/user";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  form:FormGroup=this.fb.group({
    pseudo:this.fb.control('',Validators.required),
    name:this.fb.control('',Validators.required),
    firstName:this.fb.control('',Validators.required),
    mail:this.fb.control('',Validators.required),
    sexe:this.fb.control('',Validators.required),
    password:this.fb.control('',Validators.required),
    birthDate:this.fb.control(['1999-11-09'],Validators.required
    ),
  })

  users: User[]=[];
  constructor(private datepipe: DatePipe,private fb:FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
  }

  get controls(){
    return this.form.controls;
  }

  autoComplete() {
    if(environment.production){
      return;
    }
    this.form.patchValue({
      pseudo:"Smourbiff",
      name:"Backerot",
      firstName:"Roger",
      mail:"roger@hotmail.com",
      sexe:"Homme",
      password:"SmourbiFF2",
      birthDate: "1999-11-09"
    })
  }

  sendUser(user: User) {
    console.log(user);
    console.log("Appel du service qui fait appel à la webApi");
    this.userservice.create(user).subscribe(user=>this.users.push(user));

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
