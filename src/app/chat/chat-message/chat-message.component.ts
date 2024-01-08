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

  convertDate(dateString: string): string {
    const currentDate = new Date();
    const date = new Date(dateString);
    const today = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const dayOfWeek = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

    // Si c'est aujourd'hui
    if (date.toDateString() === today.toDateString()) {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }

    // Si c'était cette semaine
    if (date > new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)) {
      const day = dayOfWeek[date.getDay()];
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${day} ${hours}:${minutes}`;
    }

    // Si c'était cette année
    if (date.getFullYear() === currentDate.getFullYear()) {
      const month = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(date);
      const day = date.getDate();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${day} ${month}, ${hours}:${minutes}`;
    }

    // Si c'était avant cette année
    const month = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(date);
    const year = date.getFullYear();
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day} ${month} ${year}, ${hours}:${minutes}`;
  }
  
  reverse(messages: Message[]): Message[] {
    return messages.reverse();
  }
}
