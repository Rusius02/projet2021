import { Component, OnInit } from '@angular/core';
import {DiscussionService} from "../services/discussion.service";
import {Discussion} from "../services/discussion";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  discussions:Discussion[]=[];

  constructor(private discussionService: DiscussionService) { }

  ngOnInit(): void {
    this.getAllDiscussions();
  }

  private getAllDiscussions(){
    this.discussionService.getAll().subscribe(discussions => this.discussions = discussions);
  }

}
