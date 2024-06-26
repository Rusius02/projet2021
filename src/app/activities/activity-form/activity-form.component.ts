import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {Sport} from "../../model/sport";
import {SportService} from "../../services/sports/sport.service";
import {Post} from "../../model/post";
import {Activity} from "../../model/activity";

//Just a form to add a new activity
@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

  //we have the sports from the database
  sports:Sport[] = [];

  //Initialize the form with its controllers
  form:FormGroup=this.fb.group({
    name:this.fb.control('',Validators.required),
    place:this.fb.control('',Validators.required),
    date:this.fb.control('',Validators.required),
    sport:this.fb.control('',Validators.required),
    isTournament:this.fb.control(true, Validators.required),
    lattitude: this.fb.control(''),
    longitude: this.fb.control('')
  })

  constructor(private fb:FormBuilder, private sportService:SportService) { }

  //Throw the activity to the pipe of data
  @Output() activityCreated: EventEmitter<Activity> = new EventEmitter<Activity>();


  ngOnInit(): void {
    //Call the method to get the sports from the database
    this.getAllSport();
  }

  //Put the data, to get it back later
  emitActivityCreation() {
    this.activityCreated.next({
      name: this.form.value.name,
      date: this.form.value.date,
      lieu: this.form.value.place,
      lattitude: this.form.value.lattitude,
      longitude: this.form.value.longitude,
      nameSport: this.form.value.sport,
      isTournament: this.form.value.isTournament
    });
  }

  //get the sports from the database
  getAllSport(){
    this.sportService.getAll().subscribe(sports => this.sports=sports);
  }

  get controls(){
    return this.form.controls;
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

  getPlace() {
    return this.controls['place']
  }

  getIsTournament() {
    return this.controls['isTournament']
  }

  getLatitude() {
    return this.controls['latitude']
  }

  getLongitude() {
    return this.controls['longitude']
  }

  //Complete the form if it's not in production
  autoComplete() {
    if(environment.production){
      return;
    }
    this.form.patchValue({
      name:"Basketball fury",
      place:"Bd Alfred de Fontaine 330, 6000 Charleroi",
      lattitude: 50.420777,
      longitude:4.166669,
      sport:"Volley",
      date: "2022-01-12T17:12",
      isTournament: false
    })
  }
}
