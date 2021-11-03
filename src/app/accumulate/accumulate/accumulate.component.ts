import { Component } from "@angular/core";


@Component({
    selector:'app-accumulate',
    template:`
        <h1>{{ title }}</h1>

        <h2>La base es: <strong>{{ base }}</strong></h2>

        <button (click)="accumulate(+base)">+ {{ base }}</button>

        <span>{{ number }}</span>

        <button (click)="accumulate(-base)">- {{ base }}</button>
    `
})
export class AccumulateComponent
{
    title: string = 'Accumulate App'
    number: number = 10;
    base: number = 20;
    accumulate( value: number )
    {
      this.number += value;
    }
}