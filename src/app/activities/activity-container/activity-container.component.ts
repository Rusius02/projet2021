import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from "../../services/activity/activities.service";
import {Activity} from "../../model/activity";
import {ParticipationService} from "../../services/participation/participation.service";
import {Participation} from "../../model/participation";

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

}
