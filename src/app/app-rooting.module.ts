import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {InscriptionComponent} from "./forms/inscription/inscription.component";
import {NewActivityComponent} from "./forms/new-activity/new-activity.component";


const routes:Routes=[
  {path:'', pathMatch:'full', redirectTo:'inscription'},
  {path:'inscription', component: InscriptionComponent},
  {path:'newActivity', component: NewActivityComponent}
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
