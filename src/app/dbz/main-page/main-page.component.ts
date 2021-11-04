import { Component } from '@angular/core';
import { Character } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent 
{
  //inyeccion de dependencias (en este  caso inyectamos el servicio)
  constructor(private dbzservice: DbzService) {}

  get characters():Character[]
  {
    return this.dbzservice.characters;
  }


  new: Character = { name: 'Maestro Roshi', power: 2000 };
  

  addNewCharacter( arg: Character)
  {

    this.characters.push(arg);
    //debugger; // el equivalente a un vardump en js, (detiene la app)
    console.log(this.characters);
    
  }


}
