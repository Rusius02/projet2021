import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Activity} from "../../model/activity";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private  static readonly API_URL:string=environment.apiUrl+"/Activity";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(ActivitiesService.API_URL+"/GetAll");
  }

  create(activity:Activity):Observable<Activity>{
    return this.httpClient.post<Activity>(ActivitiesService.API_URL+"/Create", activity);
  }

}
