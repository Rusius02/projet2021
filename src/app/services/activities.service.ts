import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Activity} from "./activity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private  static readonly API_URL:string=environment.apiUrl+"/Activity";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(ActivitiesService.API_URL);
  }

  create(activity:Activity):Observable<Activity>{
    return this.httpClient.post<Activity>(ActivitiesService.API_URL, activity);
  }

}
