import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
//Connect to the server
export class UserService {

  private  static readonly API_URL:string=environment.apiUrl+"/Users";
  constructor(private httpClient:HttpClient) { }

  //Get all the users from the server
  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>(UserService.API_URL+"/GetAll");
  }

  //Send the user to the server
  create(user:User):Observable<User>{
    return this.httpClient.post<User>(UserService.API_URL+"/Create", user);
  }

  getUser(id:number):Observable<User>{
      return this.httpClient.post<User>(UserService.API_URL+"/GetUser", id);
  }


}
