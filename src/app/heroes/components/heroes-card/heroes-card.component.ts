import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html',
  styles: [
    `
    mat-card
    {
      margin-top: 20px;
    }
    `
  ]
})
export class HeroesCardComponent implements OnInit 
{
  @Input() heroe!: Heroe;

  constructor() { }

  ngOnInit(): void 
  {

  }

}
