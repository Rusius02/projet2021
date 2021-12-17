import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthserviceService {

  private  static readonly API_URL:string=environment.apiUrl+"/Users";

  constructor(private http:HttpClient) { }

  login(user:User):Observable<any>{
    let headers=new Headers();
    return this.http.post(AuthserviceService.API_URL+"/Login",user);
  }
}
