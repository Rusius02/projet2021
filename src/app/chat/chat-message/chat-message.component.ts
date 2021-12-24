import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../model/message";
import {User} from "../../model/user";
import {TokenStorageService} from "../../services/authentification/token-storage.service";


@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  //Messages of a discussion
  @Input() messages:Message[] = [];
  //All users
  @Input() users:User[] = [];

  //ID of online user
  idUserToken:number = 0;

  constructor(private tokenStorage:TokenStorageService) { }

  //initalizes ID online user
  ngOnInit(): void {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    this.idUserToken = Number(tokenDecoded.nameid);
  }


}
