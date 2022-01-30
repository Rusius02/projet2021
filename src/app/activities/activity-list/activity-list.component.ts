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

  //All activities
  @Input() activities:Activity[]=[];
  //All participations (join between user and activity)
  @Input() participations:Participation[]=[];
  //All users
  @Input() users:User[]=[];
  //Create a particpation
  @Output() participationCreated: EventEmitter<Participation> = new EventEmitter<Participation>();
  //Delete a activity
  @Output() activityDeleted : EventEmitter<Activity> = new EventEmitter<Activity>();

  //User participation in the activity
  booleanParticipation: boolean = false;

  //ID online user
  idUserToken:number = 0;

  //Service Token
  constructor(private tokenStorage:TokenStorageService) { }

 //initialise id of the online user
  ngOnInit(): void {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    this.idUserToken = Number(tokenDecoded.nameid);
  }

  //Retrieves whether or not the user is already participating in an activity
  booleanParticipationChange(participation: Participation, activity:Activity){
    if (participation.idUser===this.idUserToken && participation.idActivity===activity.id) {
      this.booleanParticipation=true;
      return true;
    }
    return false;
  }

  //Setter of booleanParticipation
  booleanParticipationC() {
    this.booleanParticipation=false;
    return true;
  }

  //Add a participation
  participate(activity:Activity) {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken());
    if(tokenDecoded == null) {
      alert("Vous n'êtes pas connecté !");
    }
    else {
      alert("Vous participez à " + activity.name + ", qui aura lieu le " + activity.date + " à l'adresse : " + activity.lieu);
      this.participationCreated.next({
        idUser:this.idUserToken,
        idActivity:activity.id||-1
      });
    }
  }

  //Delete activity if user is admin
  deleteActivity(activity : Activity, i:number) {
  for (let user of this.users) {
    if (user.role == "admin" &&user.id==this.idUserToken) {
      alert("Suppresion de " + activity.name);
      this.activityDeleted.next(this.activities[i]);
    }
  }


  }


}
