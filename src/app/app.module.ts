import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRootingModule} from "./app-rooting.module";
import { FormsComponent } from './forms/forms.component';
import { InscriptionComponent } from './forms/inscription/inscription.component';
import { NewActivityComponent } from './forms/new-activity/new-activity.component';
import { ConnexionComponent } from './forms/connexion/connexion.component';
import {RouterModule} from "@angular/router";
import { AboutComponent } from './forms/about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityContainerComponent } from './activities/activity-container/activity-container.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    InscriptionComponent,
    NewActivityComponent,
    ConnexionComponent,
    AboutComponent,
    ActivitiesComponent,
    ActivityContainerComponent,
    ActivityListComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNCgVdE00yH0nBRSpM7k9Qm-5qqKTqD0A'
    }),
    AppRootingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
