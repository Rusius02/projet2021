import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Discussion} from "../../model/discussion";
import {Message} from "../../model/message";
import {MessageService} from "../../services/message/message.service";
import {Post} from "../../model/post";
import {DiscussionService} from "../../services/discussion/discussion.service";
import {User} from "../../model/user";
import {UserService} from "../../services/users/user.service";

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
