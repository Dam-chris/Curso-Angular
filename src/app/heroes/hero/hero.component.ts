import { Component } from '@angular/core';


@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent
{
    name: string = 'Iron man';
    age: number = 50;
    
    get nametoUpper()
    {
        return this.name.toUpperCase();
    }
    /*EJEMPLO DE COMO SE USA SETTER, one way data binding */
    set changeName(name: string)
    {
        this.name = name;
    }

    changeAge(): void
    {
        this.age = 30;
    }

    getData(): string
    {
        return `${ this.name } - ${ this.age } años`;
    }
}