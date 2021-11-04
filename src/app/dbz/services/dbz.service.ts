import { Injectable } from "@angular/core";
import { Character } from '../interface/dbz.interface';


@Injectable()
export class DbzService
{
    constructor()
    {
        console.log("clase service inicializa");
    }
    characters:Character[] = [
        {
          name:'Goku',
          power:15000
        },
        {
          name:'Vegeta',
          power:7500
        }
      ];
}