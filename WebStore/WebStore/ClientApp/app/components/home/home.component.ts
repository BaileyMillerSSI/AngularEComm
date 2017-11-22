import { Component } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Product } from '../../models/product.interface';
import { CatalogService } from '../../services/catalog.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent
{
    constructor(public CatalogService: CatalogService)
    {
        CatalogService.LoadInitial();
    }

    GetLoadingStatement(): string
    {
        if (this.CatalogService.loading)
            return 'Loading . . .';
        else
            return 'Load More';
    }

    LoadMore(): void
    {
        this.CatalogService.LoadMore();
    }
}


