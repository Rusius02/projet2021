import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Activity} from "./activity";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SportService {

  private  static readonly API_URL:string=environment.apiUrl+"/Sport";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(SportService.API_URL+"/GetAll");
  }

}
