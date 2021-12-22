import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../services/message";
import {User} from "../../services/user";


@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input() messages:Message[] = [];
  @Input() users:User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
