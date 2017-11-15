import { Component, Input } from '@angular/core';

import { Product } from '../../models/product.interface';

@Component({
    selector: 'product-card',
    styleUrls: ['./productcard.component.css'],
    templateUrl: './productcard.component.html'
})
export class ProductCardComponent implements Product {


    @Input() Price: number;
    @Input() StockCount: number;
    @Input() IsSaleItem: boolean;
    @Input() Title: string;

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
        return this.StockCount != 0;
    }

    public GetStockListing(): string
    {
        if (this.IsAvailable()) {
            return `${this.StockCount} remaining`;
        } else
        {
            return 'Out of stock!';
        }
    }
}



