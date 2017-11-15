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



    public GetStockListing(): string
    {
        if (this.StockCount != 0) {
            return `${this.StockCount} remaining`;
        } else
        {
            return 'Out of stock!';
        }
    }
}



