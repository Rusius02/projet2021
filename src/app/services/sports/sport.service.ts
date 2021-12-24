import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Activity} from "../../model/activity";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
//Connect with the server
export class SportService {

  //Give the path of the server
  private  static readonly API_URL:string=environment.apiUrl+"/Sport";
  constructor(private httpClient:HttpClient) { }

  //Get all sports from the server
  getAll():Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(SportService.API_URL+"/GetAll");
  }

}
