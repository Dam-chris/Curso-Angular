import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccumulateComponent } from './accumulate/accumulate/accumulate.component';
import { HeroesModule } from './heroes/heroes.module';
import { AccumulateModule } from './accumulate/accumulate.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AccumulateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
