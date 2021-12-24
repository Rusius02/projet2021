import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Activity} from "../../model/activity";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  //Get the path of the webapi
  private  static readonly API_URL:string=environment.apiUrl+"/Activity";
  constructor(private httpClient:HttpClient) { }

  //Get the activity from the server
  getAll():Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(ActivitiesService.API_URL+"/GetAll");
  }

  //Send an activity to the server
  create(activity:Activity):Observable<Activity>{
    return this.httpClient.post<Activity>(ActivitiesService.API_URL+"/Create", activity);
  }

  //Delete an activity from the server
  delete(id: number): Observable<any> {
    return this.httpClient.delete(ActivitiesService.API_URL + "/Delete/" + id);
  }

}
