import { Component } from '@angular/core';


import { Product } from '../../models/product.interface';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent
{
    products: Product[] = new Array<Product>();

    constructor()
    {
        for (var i = 0; i < this.getRandomArbitrary(25, 100); i++) {
            this.products.push(
                {
                    Title: `Product ${i + 1}`,
                    Price: this.getRandomArbitrary(1, 10),
                    StockCount: parseInt(this.getRandomArbitrary(0, 5).toString())
                } as Product);
        }
    }

    getRandomArbitrary(min: number, max: number)
    {
        return Math.random() * (max - min) + min;
    }
}


