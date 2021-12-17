import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from "../../services/activities.service";
import {Activity} from "../../services/activity";

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




}
