import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../../model/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthserviceService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private  static readonly API_URL:string=environment.apiUrl+"/Login";

  constructor(private router:Router,private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user:User):Observable<any>{
    return this.http.post<User>(AuthserviceService.API_URL,user);
  }



  logout() {

  }
}
