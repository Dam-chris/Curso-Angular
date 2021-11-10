import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService 
{
  private API_KEY: string = 'aeK0gefWo3KNbEqjDF7HK0TXxMCMvEHD';

  private urlService: string  = 'https://api.giphy.com/v1/gifs';

  private _history: string[] = [];

  public results: Gif[] = [];

  get history()
  {
    return [...this._history];
  }

  constructor( private http: HttpClient ) 
  { 

   /* 
    if( localStorage.getItem('history') )
    {
      //el ! se añadio para suprimir el error de que pueda devolver nulo, ya que nunca sera nulo debido a que esta controlado con una condicional 
      this._history = JSON.parse( localStorage.getItem('history')! );
    }
    */
   /*esta liena es equivalente a la lo de arriba */
    this._history = JSON.parse( localStorage.getItem('history') !) || [];

    this.results = JSON.parse( localStorage.getItem('results') !) || [];
  }

  /*query: string = '' se obliga a que tenga un valor por defento 
    asi no hay posibles errores*/
  searchGifs( query: string = '')
  {
    /*control de las mayus y los espcaios parta los repetidos */

    query = query.trim().toLowerCase();

    if ( !this._history.includes( query ) )
    {
      this._history.unshift( query );
      this._history = this._history.splice(0,10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
        .set('api_key', this.API_KEY)
        .set('limit', '10')
        .set('q', query);
     
    this.http.get<SearchGifsResponse>(`${ this.urlService }/search`, { params })
              .subscribe( res => 
              {
                console.log(res.data);
                this.results = res.data;
                localStorage.setItem('results', JSON.stringify(this.results));
              });
  }
  //https://api.giphy.com/v1/gifs/search?api_key=aeK0gefWo3KNbEqjDF7HK0TXxMCMvEHD&q=dragon%20ball%20z&limit=10
}
