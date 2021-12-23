import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {Sport} from "../../model/sport";
import {SportService} from "../../services/sports/sport.service";
import {Post} from "../../model/post";
import {Activity} from "../../model/activity";

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

sports:Sport[] = [];
  form:FormGroup=this.fb.group({
    name:this.fb.control('',Validators.required),
    place:this.fb.control('',Validators.required),
    date:this.fb.control('',Validators.required),
    sport:this.fb.control('',Validators.required),
    latitude:this.fb.control(0,Validators.required),
    longitude:this.fb.control(0,Validators.required)
  })

  constructor(private fb:FormBuilder, private sportService:SportService) { }

  @Output() activityCreated: EventEmitter<Activity> = new EventEmitter<Activity>();
  @Input() sportzz:Sport[]=[];

  ngOnInit(): void {
    this.getAllSport();
  }
  autoComplete() {
    if(environment.production){
      return;
    }
    //patchvalue n'oblige pas de tout initialiser, au contraire de setvalue
    this.form.patchValue({
      name:"Basketball fury",
      place:"Bd Alfred de Fontaine 330, 6000 Charleroi",
      latitude: 50.410294408950975,
      longitude:4.446886413936698,
      sport:"Volley",
      date: "2022-01-12T17:12",
    })
  }

  emitActivityCreation() {
    alert("activité envoyée");
    this.activityCreated.next({
      name: this.form.value.name,
      date: this.form.value.date,
      lieu: this.form.value.place,
      lattitude: this.form.value.latitude,
      longitude: this.form.value.longitude,
      nameSport: this.form.value.sport,
      isTournament:true
    });
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

  getLatitude() {
    return this.controls['latitude']
  }

  getLongitude() {
    return this.controls['longitude']
  }
}
