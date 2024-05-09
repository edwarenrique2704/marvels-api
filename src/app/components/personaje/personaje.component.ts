import { Component, OnInit } from '@angular/core';
import { ServiciñoService } from 'src/app/services/serviciño.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  title='Character';
  idCharacter='';
  character:any={};
  characterDesc='';


  constructor(private serviciñoService:ServiciñoService) {

   }

  ngOnInit(){
    
  
  }


  

}
