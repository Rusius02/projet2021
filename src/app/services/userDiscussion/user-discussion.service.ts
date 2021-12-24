import { Injectable } from '@angular/core';
import {Discussion} from "../../model/discussion";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UserDiscussion} from "../../model/user-discussion";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
//Connect with the server
export class UserDiscussionService {

  //Give the path of the server
  private static readonly API_URL: string = environment.apiUrl + "/UserDiscussion";
  constructor(private httpClient: HttpClient) { }

  //Send a post to the userDiscussion
  create(userDiscussion: UserDiscussion) {
    return this.httpClient.post<UserDiscussion>(UserDiscussionService.API_URL + "/Create", userDiscussion);
  }

  //Get all userDiscussions from the server
  getUserDiscussions(): Observable<UserDiscussion[]> {
    return this.httpClient.get<UserDiscussion[]>(UserDiscussionService.API_URL + "/GetAll");
  }
}
