import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "./message";
import {Discussion} from "./discussion";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private static readonly API_URL:string=environment.apiUrl+"/Message";
  constructor(private httpClient:HttpClient) { }


  getAll(discussion:Discussion):Observable<Message[]>{
    return this.httpClient.post<Message[]>(MessageService.API_URL+"/GetAllByIdDiscussion", discussion);
  }
}
