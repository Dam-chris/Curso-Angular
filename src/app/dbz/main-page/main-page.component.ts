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

  new: Character = { 
    name: 'Maestro Roshi', 
    power: 2000 
  };


}
