import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Participation} from "../../model/participation";

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {
  private  static readonly API_URL:string=environment.apiUrl+"/Participation";

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Participation[]>{
    return this.httpClient.get<Participation[]>(ParticipationService.API_URL+"/GetAll");
  }

  create(participation:Participation):Observable<Participation>{
    return this.httpClient.post<Participation>(ParticipationService.API_URL+"/Create", participation);
  }
}
