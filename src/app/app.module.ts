import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRootingModule} from "./app-rooting.module";
import { FormsComponent } from './forms/forms.component';
import { InscriptionComponent } from './forms/inscription/inscription.component';
import { NewActivityComponent } from './forms/new-activity/new-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    InscriptionComponent,
    NewActivityComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNCgVdE00yH0nBRSpM7k9Qm-5qqKTqD0A'
    }),
    AppRootingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
