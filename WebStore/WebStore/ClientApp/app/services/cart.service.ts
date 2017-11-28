import { Injectable } from '@angular/core';

import { CatalogService } from './catalog.service';

import { Product } from '../models/product.interface';

@Injectable()
export class CartService {

    constructor(private CatalogService: CatalogService) { }

    private ShoppingCart: string[] = new Array<string>();

    public AddItem(id: string)
    {
        this.ShoppingCart.push(id);

        //Remove 1 stock of that item from the product
        this.CatalogService.UpdateStock(id);


        console.log("A new item has been added to the cart.");

    }

    public GetItemCount(): number
    {
        return this.ShoppingCart.length;
    }

}
