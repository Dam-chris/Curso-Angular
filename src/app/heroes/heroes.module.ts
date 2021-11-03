import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListingComponent } from './listing/listing.component';

@NgModule({
    declarations:[
        HeroComponent,
        ListingComponent
    ],
    exports:[
        ListingComponent,
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule
{

}