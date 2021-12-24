import { Component, OnInit } from '@angular/core';
import {DiscussionService} from "../services/discussion/discussion.service";
import {Discussion} from "../model/discussion";
import {MessageService} from "../services/message/message.service";
import {Message} from "../model/message";
import {UserDiscussionService} from "../services/userDiscussion/user-discussion.service";
import {UserDiscussion} from "../model/user-discussion";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  discussions:Discussion[]=[];
  userDiscussions:UserDiscussion[]=[];
  allDiscussions:Discussion[]=[];
  messages:Message[]=[];

  constructor(private discussionService: DiscussionService, private messageService: MessageService, private userDiscussionService: UserDiscussionService) { }


  ngOnInit(): void {
    this.getDiscussions();
    this.getAllDiscussions();
    this.getUserDiscussions();
  }

  //Get the discussions from the database
  private getDiscussions(){
    this.discussionService.getDiscussion().subscribe(discussions => this.discussions = discussions);
  }

  private getUserDiscussions(){
    this.userDiscussionService.getUserDiscussions().subscribe(userDiscussions => this.userDiscussions= userDiscussions);
  }

  private getAllDiscussions(){
    this.discussionService.getAllDiscussion().subscribe(allDiscussions => this.allDiscussions= allDiscussions);
  }

  sendMessage(message: Message) {
    this.messageService.create(message).subscribe(message => this.messages.push(message));
  }

  sendDiscussion(discussion: Discussion) {
    this.discussionService.create(discussion).subscribe(discussion => this.discussions.push(discussion));
  }

  sendUserDiscussion(userDiscussion: UserDiscussion) {
    this.userDiscussionService.create(userDiscussion).subscribe(userDiscussion => this.userDiscussions.push(userDiscussion));
  }
}
