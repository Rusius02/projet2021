import {Component, Input, OnInit} from '@angular/core';
import {Discussion} from "../../services/discussion";
import {Message} from "../../services/message";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-chat-discussion',
  templateUrl: './chat-discussion.component.html',
  styleUrls: ['./chat-discussion.component.css']
})
export class ChatDiscussionComponent implements OnInit {

  @Input() discussions:Discussion[] = [];

  messages: Message[]=[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllMessages();
  }

  private getAllMessages(){
    this.messageService.getAll().subscribe(messages => this.messages = messages);
  }

  show(discussion:Discussion) {
    alert("discussion "+discussion.name + " ouverte");
  }
}
