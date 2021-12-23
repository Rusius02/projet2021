import {Inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Discussion} from "../../model/discussion";
import {User} from "../../model/user";
import {UserService} from "../users/user.service";

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  private static readonly API_URL: string = environment.apiUrl + "/Discussion";

  constructor(private httpClient: HttpClient) { }

  getDiscussion(): Observable<Discussion[]> {
    return this.httpClient.get<Discussion[]>(DiscussionService.API_URL + "/GetAllByIdDiscussion");
  }
}