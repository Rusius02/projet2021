import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {Sport} from "../../services/sport";
import {SportService} from "../../services/sport.service";

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit {

  sports:Sport[] = [];
  form:FormGroup=this.fb.group({
    name:this.fb.control('',Validators.required),
    place:this.fb.control('',Validators.required),
    date:this.fb.control('',Validators.required),
    sport:this.fb.control('',Validators.required)
  })

  constructor(private fb:FormBuilder, private sportService:SportService) { }

  @Input() sportzz:Sport[]=[];

  ngOnInit(): void {
    this.getAllSport();
  }
  autoComplete() {
    if(environment.production){
      return;
    }
    //patchvalue n'oblige pas de tout initialiser, au contraire de setvalue
    this.form.setValue({
      name:"Basketball fury",
      place:"Rue du Roi Albert, 23 7800 Mons",
      date: "2022-01-12T17:12",
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

  getAllSport(){
    this.sportService.getAll().subscribe(sports => this.sports=sports);
  }
}
