import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent 
{

  constructor(private gifsService: GifsService) { }
  
  /*obtener data de la llamda en la clase service*/
  get results()
  {
    return this.gifsService.results;
  }
}
