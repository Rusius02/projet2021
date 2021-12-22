import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Discussion} from "../../services/discussion";
import {Message} from "../../services/message";
import {MessageService} from "../../services/message.service";
import {Post} from "../../services/post";
import {DiscussionService} from "../../services/discussion.service";
import {User} from "../../services/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-chat-discussion',
  templateUrl: './chat-discussion.component.html',
  styleUrls: ['./chat-discussion.component.css']
})
export class ChatDiscussionComponent implements OnInit {

  @Input() discussions:Discussion[] = [];

  messages: Message[]=[];
  users: User[]=[];

  constructor(private messageService: MessageService, private userService:UserService) { }

  ngOnInit(): void {
  }

  emitDiscussionCreation(discussion:Discussion) {
    this.messageService.getAll(discussion).subscribe(messages => this.messages = messages);
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe(users => this.users = users);
  }

}
