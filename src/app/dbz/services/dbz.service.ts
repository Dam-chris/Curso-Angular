import { Injectable } from "@angular/core";
import { Character } from '../interface/dbz.interface';


@Injectable()
export class DbzService
{
    constructor()
    {
        console.log("clase service inicializa");
    }
    private _characters:Character[] = [
        {
          name:'Goku',
          power:15000
        },
        {
          name:'Vegeta',
          power:7500
        }
      ];

    get characters(): Character[]
    {
        return [...this._characters]; /*(esto se hace para evitar que sea mandado por referencia) operador spread mirar documentacion 
        (separa las propiedades de objecto y en base a ellos crea un nuevo elemento)*/
    }
    addNewCharacter( arg: Character)
    {
  
      this._characters.push(arg);
      //debugger; // el equivalente a un vardump en js, (detiene la app)
      console.log(this.characters);
      
    }
}