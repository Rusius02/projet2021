import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Post} from "./post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private static readonly API_URL: string = environment.apiUrl + "/post";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(PostService.API_URL + "/GetAll");
  }

  create(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(PostService.API_URL, post);
  }
}
