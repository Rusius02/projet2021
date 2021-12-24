import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Comment} from "../../model/comment";

//Connect with the database
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  //Give the path of the server
  private static readonly API_URL: string = environment.apiUrl + "/Comment";

  constructor(private httpClient: HttpClient) { }

  //Send a comment to the server
  create(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(CommentService.API_URL + "/Create", comment);
  }

  //Get all the comments from the database
  getAll(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(CommentService.API_URL + "/GetAll");
  }

  //Delete a comment from the database
  delete(id: number): Observable<any> {
    return this.httpClient.delete(CommentService.API_URL + "/DeleteById" + id);
  }

}
