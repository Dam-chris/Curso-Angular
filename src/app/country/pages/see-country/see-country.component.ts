import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [`
    span
    {
      margin-right: 5px;
    }
  `]
})
export class SeeCountryComponent implements OnInit 
{
  /*signo para que acepte que country pueda ser nulo*/
  country!: Country;

  constructor( private activatedRoute: ActivatedRoute,
                private countryService: CountryService ) { }

  ngOnInit() 
  {
    /*el poderoso switch map */
    this.activatedRoute.params
        .pipe(
          switchMap( ({ code }) => this.countryService.getCountryByCode( code ) ),
          tap( console.log ) /*tap es un operador que dispara un efecto secundario, en este caso 
                              sin necesidad de una funcion de flecha se puede hacer una impresion 
                              aplicando in console.log*/
        )
        .subscribe( ([country]) => this.country = country );

    /*otra forma de acerlo con un subscribe dentro de otro (kk)*/
    /*this.activatedRoute.params
          .subscribe(
            ({ code }) => 
            {
              console.log(code)

              this.countryService.searchByCode( code )
                  .subscribe( 
                    country => 
                    {
                      console.log(country)
                    });
            }
          );*/
  }

}
