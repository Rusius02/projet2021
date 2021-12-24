import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from "../services/authentification/token-storage.service";

const TOKEN_HEADER_KEY = 'Authorization';
@Injectable({
  providedIn:'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(private token:TokenStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {
      Authorization: `Bearer ${this.token.getToken()}`,
      'Content-Type': 'application/json'
    };
    request = request.clone({
      setHeaders: headers
    });
    return next.handle(request);
  }
}
