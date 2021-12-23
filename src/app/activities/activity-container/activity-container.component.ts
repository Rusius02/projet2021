import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from "../../services/activity/activities.service";
import {Activity} from "../../model/activity";

@Component({
  selector: 'app-activity-container',
  templateUrl: './activity-container.component.html',
  styleUrls: ['./activity-container.component.css']
})
export class ActivityContainerComponent implements OnInit {


  activities: Activity[]=[];

  constructor(private activityService:ActivitiesService) { }

  ngOnInit(): void {
    this.getAllActivities();
  }

  private getAllActivities(){
    this.activityService.getAll().subscribe(activities=>this.activities=activities);
  }


  sendActivity(activity: Activity) {
    this.activityService.create(activity).subscribe(activity => this.activities.push(activity));
  }
}
