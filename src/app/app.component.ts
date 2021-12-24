import { Component } from '@angular/core';
import {TokenStorageService} from "./services/authentification/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SportMap';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private logoutTokenService:TokenStorageService) {
  }

  ngOnInit():void{
    this.isLoggedIn = !!this.logoutTokenService.getToken();

    if (this.isLoggedIn) {
      const user = this.logoutTokenService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  logout() {
    this.isLoggedIn=!this.isLoggedIn;
    this.logoutTokenService.signOut();
  }
}
