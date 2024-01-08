import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {InscriptionComponent} from "./forms/inscription/inscription.component";
import { ConnexionComponent } from './forms/connexion/connexion.component';
import { AboutComponent } from './forms/about/about.component';
import { PostsComponent } from './posts/posts.component';
import {ActivitiesComponent} from "./activities/activities.component";
import {ChatComponent} from "./chat/chat.component";
import {ProfilComponent} from "./forms/profil/profil.component";

const routes: Routes=[
  {path:'', pathMatch:'full', redirectTo:'about'},
  {path:'inscription', component: InscriptionComponent},
  {path:'profil', component: ProfilComponent},
  {path:'activity', component: ActivitiesComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'about', component: AboutComponent},
  {path:'post', component: PostsComponent},
  {path:'chat', component: ChatComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRootingModule { }
