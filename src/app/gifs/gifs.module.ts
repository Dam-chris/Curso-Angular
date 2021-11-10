import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifpageComponent } from './gifpage/gifpage.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GifpageComponent,
    SearcherComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifpageComponent
  ]
})
export class GifsModule { }
