import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Activity} from "../../model/activity";
import {Participation} from "../../model/participation";

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  @Input() activities:Activity[]=[];
  @Input() participations:Participation[]=[];
  @Output() participationCreated: EventEmitter<Participation> = new EventEmitter<Participation>();

  booleanParticipation: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  booleanParticipationChange(participation: Participation, activity:Activity){
    if (participation.idUser===1 && participation.idActivity===activity.id) {
      //console.log("je suis dans le if");
      this.booleanParticipation=true;
      return true;
    }
    return false;
  }

  booleanParticipationC() {
    this.booleanParticipation=false;
    return true;
  }

  participate(activity:Activity) {
    alert("Vous participez à " + activity.name + ", qui aura lieu le " + activity.date + " à l'adresse : " + activity.lieu);
      this.participationCreated.next({
        idUser:1,
        idActivity:activity.id||-1
      });

  }
}
