import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonajesComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
