import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private  static readonly API_URL:string=environment.apiUrl+"/Users";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>(UserService.API_URL+"/GetAll");
  }

  create(user:User):Observable<User>{
    return this.httpClient.post<User>(UserService.API_URL+"/Create", user);
    console.log("Appel de Create de la webApi");
  }
}
