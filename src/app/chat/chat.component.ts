import { Component, OnInit } from '@angular/core';
import {DiscussionService} from "../services/discussion/discussion.service";
import {Discussion} from "../model/discussion";
import {MessageService} from "../services/message/message.service";
import {Message} from "../model/message";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  discussions:Discussion[]=[];
  messages:Message[]=[];

  constructor(private discussionService: DiscussionService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getDiscussions();
  }

  private getDiscussions(){
    this.discussionService.getDiscussion().subscribe(discussions => this.discussions = discussions);
  }

  sendMessage(message: Message) {
    this.messageService.create(message).subscribe(message => this.messages.push(message));
  }
}
