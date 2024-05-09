import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
  {path:"",component:PersonajesComponent,pathMatch:"full"},
  {path:"personajes",component:PersonajesComponent},
  {path:"personaje",component:PersonajeComponent},
  {path:"**",component:PersonajesComponent,pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
