import { Component, Input } from '@angular/core';

import { Product } from '../../models/product.interface';

@Component({
    selector: 'product-card',
    styleUrls: ['./productcard.component.css'],
    templateUrl: './productcard.component.html'
})
export class ProductCardComponent implements Product {
    
    @Input() price: number;
    @Input() stockCount: number;
    @Input() isSaleItem: boolean;
    @Input() title: string;
    @Input() url: string;

    public GetCanBuy(): string
    {
        if (this.IsAvailable()) {
            return `BUY NOW`;
        } else
        {
            return `N/A`;
        }
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



