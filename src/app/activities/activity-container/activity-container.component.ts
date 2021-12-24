import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from "../../services/activity/activities.service";
import {Activity} from "../../model/activity";
import {ParticipationService} from "../../services/participation/participation.service";
import {Participation} from "../../model/participation";

//Contains the list of the activities, the map with the markers and the form
@Component({
  selector: 'app-activity-container',
  templateUrl: './activity-container.component.html',
  styleUrls: ['./activity-container.component.css']
})
export class ActivityContainerComponent implements OnInit {


  activities: Activity[]=[];
  participations: Participation[]=[];


  constructor(private activityService:ActivitiesService, private participationService:ParticipationService) { }

  //Get the data from the databases thanks to the 2 methods inside
  ngOnInit(): void {
    this.getAllActivities();
    this.getAllParticipations()
  }

  //Get the activities from the database and fill the array to display it
  private getAllActivities(){
    this.activityService.getAll().subscribe(activities=>this.activities=activities);
  }

  //Get the participations from the database and fill the array to display it
  private getAllParticipations(){
    this.participationService.getAll().subscribe(participations=>this.participations=participations);
  }

  //push an activity to the database
  sendActivity(activity: Activity) {
    this.activityService.create(activity).subscribe(activity => this.activities.push(activity));
  }

  //push an participation to the database
  sendParticipation(participation: Participation) {
    this.participationService.create(participation).subscribe(participation => this.participations.push(participation));
  }

  //Delete an activity from the database
  deleteActivity(activityDeleted: Activity) {
    this.activityService.delete(activityDeleted.id || -1)
      .subscribe(() => {
        for (let i =0; i <this.activities.length; i++) {
          const activity = this.activities[i];

          if (activity.id === activityDeleted.id) {
            this.activities.splice(i, 1);
            break;
          }
        }
      });
  }

}
