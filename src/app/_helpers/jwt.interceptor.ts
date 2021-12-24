import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from "../services/authentification/token-storage.service";

//This class implements HttpInterceptor and its role is to catch a request and to add a token
//got with the method login, it's used to secure the request
@Injectable({
  providedIn:'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(private token:TokenStorageService) { }

  //Catch the request
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Initialize the headers with adding of the token
    const headers = {
      Authorization: `Bearer ${this.token.getToken()}`,
      'Content-Type': 'application/json'
    };
    //Take the request, clone it and set the token to it
    request = request.clone({
      setHeaders: headers
    });
    //Return the request
    return next.handle(request);
  }
}
