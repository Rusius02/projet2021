import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthserviceService {

  private  static readonly API_URL:string=environment.apiUrl+"/Login";

  constructor(private router:Router,private http:HttpClient) {
  }

  login(user:User):Observable<any>{
    return  this.http.post<User>(AuthserviceService.API_URL, user,httpOptions);
  }

  logout() {

  }
}
