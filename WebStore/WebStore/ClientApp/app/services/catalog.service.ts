import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Product } from '../models/product.interface';

@Injectable()
export class CatalogService
{
    products: Product[] = new Array<Product>();
    loading: boolean = false;

    constructor(private web: Http) {
        
    }

    LoadInitial(): void
    {
        this.loading = true;
        this.web.get('/api/products/').map(result => {
            return result.json() as Product[];
        }).subscribe(data => {
            this.products = data;
            this.loading = false;
        });
    }

    LoadMore(): void {
        this.loading = true;
        this.web.get(`/api/products/range?start=${this.products.length}&end=${this.products.length + 25}`)
            .map(result => {
                return result.json() as Product[];
            })
            .subscribe(data => {
                for (var i = 0; i < data.length; i++) {
                    this.products.push(data[i]);
                }

                this.loading = false;
            });
    }

    CanInfiniteScroll(): boolean
    {
        if (this.IsMobile() && this.products.length < 200)
            return false;
        else
            return true;
    }

    private IsMobile(): boolean
    {
        var agent = navigator.userAgent;

        var match = agent.match('iPhone|Android');

        return match != null;
    }
    
}