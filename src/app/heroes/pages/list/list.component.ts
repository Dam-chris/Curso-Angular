import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit 
{
  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService ) { }



  ngOnInit()
  {
    this.heroesService.getHeroes()
        //.subscribe( console.log );
        .subscribe( res => this.heroes = res,
                    err => console.log );
  }

}
