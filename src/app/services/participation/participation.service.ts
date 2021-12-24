import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Participation} from "../../model/participation";

@Injectable({
  providedIn: 'root'
})
//Connect with the server
export class ParticipationService {
  //Give the path of the server
  private  static readonly API_URL:string=environment.apiUrl+"/Participation";
  constructor(private httpClient:HttpClient) { }

  //Get all participations from the server
  getAll():Observable<Participation[]>{
    return this.httpClient.get<Participation[]>(ParticipationService.API_URL+"/GetAll");
  }

  //Send a discussion to the server
  create(participation:Participation):Observable<Participation>{
    return this.httpClient.post<Participation>(ParticipationService.API_URL+"/Create", participation);
  }
}
