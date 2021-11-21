import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {InscriptionComponent} from "./forms/inscription/inscription.component";
import {NewActivityComponent} from "./forms/new-activity/new-activity.component";
import { ConnexionComponent } from './forms/connexion/connexion.component';
import { AboutComponent } from './forms/about/about.component';



const routes: Routes=[
  {path:'', pathMatch:'full', redirectTo:'about'},
  {path:'inscription', component: InscriptionComponent},
  {path:'newActivity', component: NewActivityComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'about', component: AboutComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRootingModule { }
