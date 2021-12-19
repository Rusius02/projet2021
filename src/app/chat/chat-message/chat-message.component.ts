import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../services/message";

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input() messages:Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
