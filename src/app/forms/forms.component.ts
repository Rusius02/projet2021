import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../services/users/user.service";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }



}
