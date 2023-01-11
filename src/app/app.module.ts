import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Tarea12Module } from './tarea12/tarea12.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Tarea12Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
