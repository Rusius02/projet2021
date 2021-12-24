import { Injectable } from '@angular/core';
import jwt_Decode from "jwt-decode";

const TOKEN_KEY='auth-token';
const USER_KEY='auth-user';

@Injectable({
  providedIn: 'root'
})
//Service used to stock and send the token to other component
export class TokenStorageService {

  constructor() { }

  //Clear the session to not have token anymore
  signOut(): void {
    window.sessionStorage.clear();
  }

  //Store the token in the sessionstorage
  public saveToken(token: string): void {
    //Remove a token to not have 2
    window.sessionStorage.removeItem(TOKEN_KEY);
    //Add the one you want
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  //return the token
  public getToken(): string | null {
    //Get the token from the session storage
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  //Decode the token to use its information (use of the library Jwt_decode, npm install needed)
  public getDecodedToken(token : string | null) : any{
    if (token != null) {
      var decoded = jwt_Decode(token);
    }
    return decoded;
  }


}
