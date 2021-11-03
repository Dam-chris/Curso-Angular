import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent 
{
  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hawkeye'];
  heroDeleted:string = '';

  deleteHero()
  {
    //const hero = this.heroes.splice(this.heroes.length -1, this.heroes.length); mi metodo xd
    this.heroDeleted = this.heroes.shift() || ''; //elimina un elemto del array y lo retorna, con lo que se guarda en la variable (al igual que el splice)
    
  }

}
