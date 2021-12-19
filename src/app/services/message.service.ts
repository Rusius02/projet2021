import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "./message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private static readonly API_URL:string=environment.apiUrl+"/Message";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Message[]>{
    return this.httpClient.get<Message[]>(MessageService.API_URL+"/GetAll");
  }
}
