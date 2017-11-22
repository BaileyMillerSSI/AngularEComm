import { Injectable } from '@angular/core';


import { Product } from '../models/product.interface';

@Injectable()
export class CartService {

    private ShoppingCart: string[] = new Array<string>();

    public AddItem(id: string)
    {
        this.ShoppingCart.push(id);

        console.log("A new item has been added to the cart.");

    }

    public GetItemCount(): number
    {
        return this.ShoppingCart.length;
    }

}
