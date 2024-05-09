import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiciñoService } from 'src/app/services/serviciño.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  title='Characters';

  constructor(private serviciñoService:ServiciñoService, private router:Router) { }

  characters?:Observable<any>;

  ngOnInit(){

    this.getAllCharacters();

  }


  getAllCharacters(){

    this.characters= this.serviciñoService.getCharacters();

  }


}
