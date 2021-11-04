import { NgModule } from "@angular/core";
import { AccumulateComponent } from './accumulate/accumulate.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        AccumulateComponent
    ],
    exports:[
        AccumulateComponent
    ]
})
export class AccumulateModule
{

}