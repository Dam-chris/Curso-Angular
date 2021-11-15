import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button
    {
      margin-right: 5px;
    }
    `]
})
export class ByRegionComponent  
{
  regions: string[] = [ 'africa','americas', 'asia', 'europe', 'oceania' ];
  regionActive: string = '';
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  activateRegion( region: string )
  {
    if (this.regionActive == region) { return; }

    this.regionActive = region;
    this.countries = [];
    this.countryService.searchByRegion( region )
        .subscribe(
          res => this.countries = res,
          err => console.log(err)
          
        )
    //TODO: hacer el llamado al servicio
  }

}
