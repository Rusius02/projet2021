import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Activity} from "../../services/activity";

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  @Output() toDoDeleted: EventEmitter<Activity>=new  EventEmitter<Activity>();
  @Input() activities:Activity[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  emitTododeletedByIndex(i: number) {
    this.toDoDeleted.next(this.activities[i]);
  }
}
