import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: []
})
export class ByCapitalComponent  
{
  term: string = 'Madrid';

  errorExist: boolean = false;

  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  search( term:string )
  {
    this.term = term;
    this.errorExist = false;

    this.countryService.searchByCapital( this.term )
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
    console.log(term);
    
  }

}
