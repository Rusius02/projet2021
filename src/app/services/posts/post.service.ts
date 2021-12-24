import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Post} from "../../model/post";

@Injectable({
  providedIn: 'root'
})
//Connect with the server
export class PostService {

  //Give the path of the server
  private static readonly API_URL: string = environment.apiUrl + "/Post";
  constructor(private httpClient: HttpClient) { }

  //Get all posts from the server
  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(PostService.API_URL + "/GetAll");
  }

  //Send a post to the server
  create(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(PostService.API_URL + "/Create", post);
  }

  //Delete a post to the server
  delete(id: number): Observable<any> {
    return this.httpClient.delete(PostService.API_URL + "/Delete/" + id);
  }
}
