import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { InscriptionComponent } from './forms/inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNCgVdE00yH0nBRSpM7k9Qm-5qqKTqD0A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
