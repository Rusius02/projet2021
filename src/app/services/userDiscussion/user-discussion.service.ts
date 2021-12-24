import { Injectable } from '@angular/core';
import {Discussion} from "../../model/discussion";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UserDiscussion} from "../../model/user-discussion";

@Injectable({
  providedIn: 'root'
})
export class UserDiscussionService {

  private static readonly API_URL: string = environment.apiUrl + "/UserDiscussion";

  constructor(private httpClient: HttpClient) { }

  create(userDiscussion: UserDiscussion) {
    return this.httpClient.post<UserDiscussion>(UserDiscussionService.API_URL + "/Create", userDiscussion);
  }
}
