import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  formHide=false;

  constructor() { }

  ngOnInit(): void {
  }

  hide() {
    this.formHide=!this.formHide;
  }
}
