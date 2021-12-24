import {Inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Discussion} from "../../model/discussion";

@Injectable({
  providedIn: 'root'
})
//Connect with the server
export class DiscussionService {

  //Get the path of the webapi
  private static readonly API_URL: string = environment.apiUrl + "/Discussion";

  constructor(private httpClient: HttpClient) { }

  //Get the discussion from the server
  getDiscussion(): Observable<Discussion[]> {
    return this.httpClient.get<Discussion[]>(DiscussionService.API_URL + "/GetAll");
  }

  //Send a discussion to the server
  create(discussion: Discussion) {
    return this.httpClient.post<Discussion>(DiscussionService.API_URL + "/Create", discussion);
  }

  //Get all discussions from the server
  getAllDiscussion(): Observable<Discussion[]> {
    return this.httpClient.get<Discussion[]>(DiscussionService.API_URL + "/GetAll");
  }
}
