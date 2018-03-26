import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RuneSpreadComponent } from './rune-spread/rune-spread.component';
import { OghamSpreadComponent } from './ogham-spread/ogham-spread.component';
import { TarrotSpreadComponent } from './tarrot-spread/tarrot-spread.component';
import { IchingSpreadComponent } from './iching-spread/iching-spread.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RuneSpreadComponent,
    OghamSpreadComponent,
    TarrotSpreadComponent,
    IchingSpreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
