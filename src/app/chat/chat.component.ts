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
    this.getDiscussions();
  }

  private getDiscussions(){
    this.discussionService.getDiscussion().subscribe(discussions => this.discussions = discussions);
  }

}
