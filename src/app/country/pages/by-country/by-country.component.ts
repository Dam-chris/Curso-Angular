import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
    li
    {
      cursor: pointer;
    }
  `]
})
export class ByCountryComponent 
{
  term: string = 'España';

  errorExist: boolean = false;

  countries: Country[] = [];

  suggestCountries: Country[] = [];

  showSuggests: boolean = true;

  constructor( private countryService: CountryService ) { }
  search( term:string )
  {
    this.term = term;
    this.errorExist = false;
    this.showSuggests = false;

    console.log('lo has conseguido a la primera, ahora deja de ser tan lloron');
    this.countryService.searchByName( this.term )
        .subscribe( 
          res => 
          {
            console.log(res);
            this.countries = res;
          },
          err =>
          {
            console.log(err);
            this.errorExist = true;
                            
          }

        );
  }

  suggestions( term: string)
  {
    this.errorExist = false;
    this.showSuggests = true;
    this.term = term;
    this.countryService.searchByName( term )
        .subscribe( res => this.suggestCountries = res )
  }


}
