import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Comment} from "../../model/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private static readonly API_URL: string = environment.apiUrl + "/Comment";

  constructor(private httpClient: HttpClient) { }

  create(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(CommentService.API_URL + "/Create", comment);
  }

  getAll(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(CommentService.API_URL + "/GetAll");
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(CommentService.API_URL + "/DeleteById" + id);
  }

}
