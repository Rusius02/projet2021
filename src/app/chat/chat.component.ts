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

  //All discussion
  discussions:Discussion[]=[];
  //All userDiscussion (join between user and discussion to know which user is in which discussion )
  userDiscussions:UserDiscussion[]=[];
  //All discussion
  allDiscussions:Discussion[]=[];
  //All messages
  messages:Message[]=[];

  constructor(private discussionService: DiscussionService,
              private messageService: MessageService,
              private userDiscussionService: UserDiscussionService
  ) { }

  //The useful elements are retrieved directly
  ngOnInit(): void {
    this.getDiscussions();
    this.getAllDiscussions();
    this.getUserDiscussions();
  }

  //Get the discussions from the database
  private getDiscussions(){
    this.discussionService.getDiscussion().subscribe(discussions => this.discussions = discussions);
  }

  //Get the users from the database
  private getUserDiscussions(){
    this.userDiscussionService.getUserDiscussions().subscribe(userDiscussions => this.userDiscussions= userDiscussions);
  }

  //Get the discussions from the database
  private getAllDiscussions(){
    this.discussionService.getAllDiscussion().subscribe(allDiscussions => this.allDiscussions= allDiscussions);
  }

  //Send a new message
  sendMessage(message: Message) {
    this.messageService.create(message).subscribe(message => this.messages.push(message));
  }

  //Send a new discussion
  sendDiscussion(discussion: Discussion) {
    this.discussionService.create(discussion).subscribe(discussion => this.discussions.push(discussion));
  }

  //Send a new userDiscussion
  sendUserDiscussion(userDiscussion: UserDiscussion) {
    this.userDiscussionService.create(userDiscussion).subscribe(userDiscussion => this.userDiscussions.push(userDiscussion));
  }
}
