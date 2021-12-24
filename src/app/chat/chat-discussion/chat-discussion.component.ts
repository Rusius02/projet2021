import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Discussion} from "../../model/discussion";
import {Message} from "../../model/message";
import {MessageService} from "../../services/message/message.service";
import {User} from "../../model/user";
import {UserService} from "../../services/users/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserDiscussion} from "../../model/user-discussion";
import {TokenStorageService} from "../../services/authentification/token-storage.service";

@Component({
  selector: 'app-chat-discussion',
  templateUrl: './chat-discussion.component.html',
  styleUrls: ['./chat-discussion.component.css']
})
export class ChatDiscussionComponent implements OnInit {

  //User discussions
  @Input() discussions:Discussion[] = [];
  @Input() userDiscussions:UserDiscussion[] = [];
  //All discussions
  @Input() allDiscussions:Discussion[] = [];
  //Add messages
  @Output() messageCreated: EventEmitter<Message> = new EventEmitter<Message>();
  //Add discussion
  @Output() discussionCreated: EventEmitter<Discussion> = new EventEmitter<Discussion>();
  //Add userDiscussion (join between user and discussion)
  @Output() userDiscussionCreated: EventEmitter<UserDiscussion> = new EventEmitter<UserDiscussion>();

  //All messages in a thread
  messages: Message[]=[];
  //All users
  users: User[]=[];
  //All users of a new conversation
  usersDiscussion: string []=[];
  //id of the discussion clicked on
  idDiscussion:number=0;

  //Form to send a message
  form:FormGroup = this.fb.group({
    message : ['', Validators.required]
  });

  //hidden or not hidden the sending of messages
  hiddennewM: boolean = true;
  //hidden or not hidden the creation of a new discussion
  hiddenNewD: boolean = true;
  //hidden or not hidden the conversation
  hiddenMessage: boolean = false;

  //Form to create a discussion
  formDiscussion: FormGroup = this.fb.group( {
    name:this.fb.control('',Validators.required),
    user:this.fb.control('',Validators.required)
  });


  constructor(private messageService: MessageService, private userService:UserService, private fb:FormBuilder, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  //retrieves messages when a conversation is clicked on
  emitDiscussionCreation(discussion:Discussion) {
    this.idDiscussion=discussion.idDiscussion||-1;
    this.messageService.getAll(discussion).subscribe(messages => this.messages = messages);
    this.getAllUsers();
    this.hiddennewM = false;
    this.hiddenNewD=true;
    this.hiddenMessage=false;
  }

  //retrieves all users
  getAllUsers() {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  //creates a message
  emitMessageCreation(idDiscussion:number) {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    alert("'"+this.form.value.message + "' envoyé");
    this.messageCreated.next({
      text: this.form.value.message,
      idUser:Number(tokenDecoded.nameid),
      idDiscussion:idDiscussion
    });
    this.clear();
  }

  //creates a discussion
  emitDiscussionAdd() {
    alert("Discussion crée !");
    this.discussionCreated.next({
      name:this.formDiscussion.value.name
    });
    this.emitUserDiscussion();
  }

  //creates a userDiscussion (join between user and discussion) for a user to participate in a discussion
  emitUserDiscussion(){
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    for (let user of this.users) {
      if (user.id===Number(tokenDecoded.nameid)) {
        this.usersDiscussion.push(user.pseudo);
      }
    }
    for (let userDis of this.usersDiscussion) {
      for (let user of this.users) {
        if(userDis===user.pseudo) {
          this.userDiscussionCreated.next({
            idUser:user.id||-1,
            idDiscussion:(this.allDiscussions[this.allDiscussions.length-1].idDiscussion||-2)+1
          });
        }
      }
    }
    this.clearDiscussion();
    this.usersDiscussion.pop();
    location.reload();
  }

  //empties the fields of the message form
  clear() {
    this.form.reset();
  }

  //adds a user to the list of users of the new discussion
  addUser() {
    if (this.usersDiscussion.indexOf(this.formDiscussion.value.user)===-1)
    this.usersDiscussion.push(this.formDiscussion.value.user);
  }

  //Show or hide items when clicking on 'new discussion'.
  hiddenNewDiscussion() {
    if(this.hiddenNewD) {
      this.hiddenNewD=false;
      this.hiddenMessage=true;
      this.hiddennewM = true;
    }
    else {
      this.hiddenNewD=true;
    }
  }

  //Retrieves the "name" value from the discussion creation form to see if we can create the conversation.
  getName() {
    if (this.formDiscussion.value.name === "")
      return false;
    return true;
  }

  //empties the fields of the new discussion form
  private clearDiscussion() {
    this.formDiscussion.reset();
  }
}
