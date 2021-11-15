import { Country } from '../interfaces/country.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService 
{
  private apiUrl: string = 'https://restcountries.com/v3.1';
  
  get httpParams ()
  {
    return new HttpParams().set( 'fields', 'name,capital,cioc,flags,population' );
  }

  constructor( private httpClient: HttpClient ) { }

  searchByName( term: string ):Observable<Country[]>
  {
    const url = `${ this.apiUrl }/name/${ term }`;
    return this.httpClient.get<Country[]>( url, { params: this.httpParams } );
  }
  searchByCapital( term: string):Observable<Country[]>
  {
    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.httpClient.get<Country[]>( url, { params: this.httpParams } );
  }
  searchByRegion( term: string):Observable<Country[]>
  {
    const url = `${ this.apiUrl }/region/${ term }`;
    return this.httpClient.get<Country[]>( url, { params: this.httpParams }  );
  }
  getCountryByCode( code: string ):Observable<Country>
  {
    const url = `${ this.apiUrl }/alpha/${ code }`;
    return this.httpClient.get<Country>( url );
  }

}
