import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Discussion} from "../../model/discussion";
import {Message} from "../../model/message";
import {MessageService} from "../../services/message/message.service";
import {User} from "../../model/user";
import {UserService} from "../../services/users/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-chat-discussion',
  templateUrl: './chat-discussion.component.html',
  styleUrls: ['./chat-discussion.component.css']
})
export class ChatDiscussionComponent implements OnInit {

  @Input() discussions:Discussion[] = [];
  @Output() messageCreated: EventEmitter<Message> = new EventEmitter<Message>();

  messages: Message[]=[];
  users: User[]=[];
  idDiscussion:number=0;

  form:FormGroup = this.fb.group({
    message : ['', Validators.required]
  });

  hidden: boolean = true;

  constructor(private messageService: MessageService, private userService:UserService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  emitDiscussionCreation(discussion:Discussion) {
    this.idDiscussion=discussion.idDiscussion;
    this.messageService.getAll(discussion).subscribe(messages => this.messages = messages);
    this.getAllUsers();
    this.hidden = false;
  }

  getAllUsers() {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  emitMessageCreation(idDiscussion:number) {
    alert("'"+this.form.value.message + "' envoyé");
    this.messageCreated.next({
      text: this.form.value.message,
      idUser:1,
      idDiscussion:idDiscussion
    });
    this.clear();
  }

  clear() {
    this.form.reset();
  }


}
