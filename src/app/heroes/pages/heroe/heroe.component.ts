import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { switchMap,tap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img
  {
    width: 100%;
    border-radius:5px
  }
  `
  ]
})
export class HeroeComponent implements OnInit 
{
  heroe!: Heroe;

  constructor( private activatedRoute: ActivatedRoute, private heroesService:HeroesService,
                private route: Router) { }

  ngOnInit() 
  {
    this.activatedRoute.params
      .pipe(
          switchMap( ({ id }) => this.heroesService.getHeroeById(id) ),
          tap( console.log ) 

      ).subscribe( res => this.heroe = res );
      //siwtchmap pasa directame la id a la llamda del heroe a la que le hacemos un subcribe y obtenemos la respouesta de esa llamada
  }

  back()
  {
    this.route.navigate(['/heroes/list']);
  }
}
