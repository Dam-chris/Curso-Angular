import { Component, Input } from '@angular/core';
import { Character } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent  
{
  //@Input() characters: Character[] =[];
  constructor(private dbzservice: DbzService) {}

  get characters()
  {
    return this.dbzservice.characters;
  }
}
