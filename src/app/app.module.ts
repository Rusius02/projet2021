import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRootingModule} from "./app-rooting.module";
import { FormsComponent } from './forms/forms.component';
import { InscriptionComponent } from './forms/inscription/inscription.component';
import { ConnexionComponent } from './forms/connexion/connexion.component';
import {ProfilComponent} from "./forms/profil/profil.component";
import {RouterModule} from "@angular/router";
import { AboutComponent } from './forms/about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityContainerComponent } from './activities/activity-container/activity-container.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { DatePipe } from '@angular/common';
import { ActivityFormComponent } from './activities/activity-form/activity-form.component';
import { ChatComponent } from './chat/chat.component';
import { ChatDiscussionComponent } from './chat/chat-discussion/chat-discussion.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component'
import {JwtHelperService} from "@auth0/angular-jwt";
import {JwtInterceptor} from "./_helpers";

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    InscriptionComponent,
    ConnexionComponent,
    ProfilComponent,
    AboutComponent,
    ActivitiesComponent,
    ActivityContainerComponent,
    ActivityListComponent,
    PostsComponent,
    PostListComponent,
    PostFormComponent,
    ActivityFormComponent,
    ActivityFormComponent,
    ChatComponent,
    ChatDiscussionComponent,
    ChatMessageComponent
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
  providers:  [DatePipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi:true
  },
    JwtHelperService],


  bootstrap: [AppComponent]
})
export class AppModule { }
