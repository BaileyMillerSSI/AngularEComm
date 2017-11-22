import { Component, Input } from '@angular/core';


import { CartService } from '../../services/cart.service';

import { Product } from '../../models/product.interface';

@Component({
    selector: 'product-card',
    styleUrls: ['./productcard.component.css'],
    templateUrl: './productcard.component.html'
})
export class ProductCardComponent implements Product {


    constructor(private CartService: CartService)
    {

    }

    @Input() price: number;
    @Input() stockCount: number;
    @Input() isSaleItem: boolean;
    @Input() title: string;
    @Input() url: string;
    @Input() id: string;

    public GetCanBuy(): string
    {
        if (this.IsAvailable()) {
            return `Add to Cart`;
        } else
        {
            return `N/A`;
        }
    }

    public AppendToCart()
    {
        this.CartService.AddItem(this.id);
    }

    public IsAvailable(): boolean
    {
        return this.stockCount != 0;
    }

    public GetStockListing(): string
    {
        if (this.IsAvailable()) {
            return `${this.stockCount} remaining`;
        } else
        {
            return 'Out of stock!';
        }
    }
}



