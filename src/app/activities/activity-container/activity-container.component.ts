import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from "../../services/activity/activities.service";
import {Activity} from "../../model/activity";
import {ParticipationService} from "../../services/participation/participation.service";
import {Participation} from "../../model/participation";
import {Post} from "../../model/post";

@Component({
  selector: 'app-activity-container',
  templateUrl: './activity-container.component.html',
  styleUrls: ['./activity-container.component.css']
})
export class ActivityContainerComponent implements OnInit {


  activities: Activity[]=[];
  participations: Participation[]=[];

  constructor(private activityService:ActivitiesService, private participationService:ParticipationService) { }

  ngOnInit(): void {
    this.getAllActivities();
    this.getAllParticipations()
  }

  private getAllActivities(){
    this.activityService.getAll().subscribe(activities=>this.activities=activities);
  }

  private getAllParticipations(){
    this.participationService.getAll().subscribe(participations=>this.participations=participations);
  }


  sendActivity(activity: Activity) {
    this.activityService.create(activity).subscribe(activity => this.activities.push(activity));
  }

  sendParticipation(participation: Participation) {
    this.participationService.create(participation).subscribe(participation => this.participations.push(participation));
  }

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
