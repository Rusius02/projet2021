import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../../model/message";
import {Discussion} from "../../model/discussion";

@Injectable({
  providedIn: 'root'
})
//Connect with the server
export class MessageService {

  //Give the path of the server
  private static readonly API_URL:string=environment.apiUrl+"/Message";
  constructor(private httpClient:HttpClient) { }

  //Get all discussions from the server
  getAll(discussion:Discussion):Observable<Message[]>{
    return this.httpClient.post<Message[]>(MessageService.API_URL+"/GetAllByIdDiscussion", discussion);
  }

  //Send a message to the server to add it in the database
  create(message: Message): Observable<Message> {
    return this.httpClient.post<Message>(MessageService.API_URL + "/Create", message);
  }

}
