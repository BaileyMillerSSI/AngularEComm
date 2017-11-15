import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent
{
    products: string[] = new Array<string>();

    constructor()
    {
        for (var i = 0; i < this.getRandomArbitrary(1, 50); i++) {
            this.products.push(`Product: ${i+1}`);
        }
    }

    getRandomArbitrary(min: number, max: number)
    {
        return Math.random() * (max - min) + min;
    }
}


