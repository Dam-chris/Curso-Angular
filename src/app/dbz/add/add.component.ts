import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent 
{
  @Input() new: Character = {
    name:'',
    power:0
  };

  //El output sirve para emitir eventos (event emitter se debe importar siempre desde angualar core)
  //@Output() onNewCharacter: EventEmitter<Character> =  new EventEmitter();
  
  constructor(private dbzservice: DbzService) {}

  add()
  {
    if (this.new.name.length == 0 || !Number(this.new.power)) 
    {
      return;  
    }

    console.log(this.new);

    //aqui se emite el objeto
    //this.onNewCharacter.emit( this.new );

    //llamada a la funcion definida en dbzservice
    this.dbzservice.addNewCharacter( this.new );
    
    this.new = {
      name: '', 
      power: 0
    };
    
  }

}
