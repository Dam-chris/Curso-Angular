import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit 
{
  term: string = '';
  heroes: Heroe[] = [];
  selectedHeroe!: Heroe | null;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void 
  {
  }

  searching()
  {
    this.heroesService.getSuggestions( this.term.trim() )
          .subscribe(res => this.heroes = res);
  }
  optionSelected( event: MatAutocompleteSelectedEvent )
  {
    //TODO: validar si es un string vacio
    if (event.option.value == '') 
    {
      this.selectedHeroe = null;
      return;  
    }
    const heroe: Heroe = event.option.value;
    this.term = heroe.superhero;
   
    this.heroesService.getHeroeById( heroe.id! )
          .subscribe( res => this.selectedHeroe = res );
  }

}
