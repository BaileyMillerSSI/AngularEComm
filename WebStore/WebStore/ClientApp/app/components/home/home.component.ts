import { Component } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Product } from '../../models/product.interface';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent
{
    products: Product[] = new Array<Product>();
    loading: boolean = false;

    constructor(private web: Http)
    {
        this.loading = true;
        web.get('/api/products/').map(result => {
            return result.json() as Product[];
        }).subscribe(data =>
        {
            this.products = data;
            this.loading = false;
        });
    }

    GetLoadingStatement(): string
    {
        if (this.loading)
            return 'Loading . . .';
        else
            return 'Load More';
    }

    LoadMore(): void
    {
        this.loading = true;
        this.web.get(`/api/products/range?start=${this.products.length}&end=${this.products.length+25}`)
            .map(result =>
            {
                return result.json() as Product[];
            })
            .subscribe(data =>
            {
                for (var i = 0; i < data.length; i++) {
                    this.products.push(data[i]);
                }

                this.loading = false;
        });
    }
}


