import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styles: [
  ]
})
export class SearcherComponent  
{

  constructor( private gifsService: GifsService ) { }

  /* searchtxt!:ElementRef, el operador ! es (not null assertion) es para que 
    no nos salte el error ya que searchtxt no se iniciliza en ningun momemntos 
    con lo qeu segun typescriopt pued no existir, sin embargo al estar 
    seguros de ser un elemto existente y semrep presente en nuestro html lo ponemos*/
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement> /*<HTMLInputElement> es para especificar de que elemnto se trata 
                                                                  y asi podeer manejar sus propiedades mejor desde typescript */
  searcher()
  {
    const value = this.txtSearch.nativeElement.value;
    
    if( value.trim().length == 0 )
    {
      return;
    }

    this.gifsService.searchGifs(value);

    console.log( this.gifsService.history);
    

    this.txtSearch.nativeElement.value = ''
    
  }
  
}
