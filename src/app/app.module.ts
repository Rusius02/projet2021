import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRootingModule} from "./app-rooting.module";
import { FormsComponent } from './forms/forms.component';
import { InscriptionComponent } from './forms/inscription/inscription.component';
import { ConnexionComponent } from './forms/connexion/connexion.component';
import {RouterModule} from "@angular/router";
import { AboutComponent } from './forms/about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityContainerComponent } from './activities/activity-container/activity-container.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { DatePipe } from '@angular/common';
import { ActivityFormComponent } from './activities/activity-form/activity-form.component'

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    InscriptionComponent,
    ConnexionComponent,
    AboutComponent,
    ActivitiesComponent,
    ActivityContainerComponent,
    ActivityListComponent,
    PostsComponent,
    PostListComponent,
    PostFormComponent,
    ActivityFormComponent,
    ActivityFormComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNCgVdE00yH0nBRSpM7k9Qm-5qqKTqD0A'
    }),
    AppRootingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
