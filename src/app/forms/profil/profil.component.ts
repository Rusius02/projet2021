import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "../../model/activity";
import {User} from "../../model/user";
import {UserService} from "../../services/users/user.service";
import {TokenStorageService} from "../../services/authentification/token-storage.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user:any;

  constructor(private userService:UserService, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    var tokenDecoded = this.tokenStorage.getDecodedToken( this.tokenStorage.getToken())
    this.userService.getUser(Number(tokenDecoded.nameid)).subscribe((data)=>{
      this.user = data;
      console.log(data.firstName)

    })
  }

}
