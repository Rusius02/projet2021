import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Activity} from "../../model/activity";
import {Participation} from "../../model/participation";
import {Comment} from "../../model/comment";
import {TokenStorageService} from "../../services/authentification/token-storage.service";
import {User} from "../../model/user";

//Contains the list of the activities
@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  @Input() activities:Activity[]=[];
  @Input() participations:Participation[]=[];
  @Input() users:User[]=[];
  @Output() participationCreated: EventEmitter<Participation> = new EventEmitter<Participation>();
  @Output() activityDeleted : EventEmitter<Activity> = new EventEmitter<Activity>();

  booleanParticipation: boolean = false;

  idUserToken:number = 0;

  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    this.idUserToken = Number(tokenDecoded.nameid);
  }

  booleanParticipationChange(participation: Participation, activity:Activity){
    if (participation.idUser===this.idUserToken && participation.idActivity===activity.id) {
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

  deleteActivity(activity : Activity, i:number) {
  for (let user of this.users) {
    if (user.role == "admin" &&user.id==this.idUserToken) {
      alert("Suppresion de " + activity.name);
      this.activityDeleted.next(this.activities[i]);
    }
  }


  }
}
