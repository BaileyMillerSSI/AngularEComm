import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
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

    @ViewChild('prods') ProductsDiv: ElementRef;

    @HostListener("window:scroll", []) onWindowScroll() {
        // do some stuff here when the window is scrolled
        const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        var divHeight = (this.ProductsDiv.nativeElement as HTMLDivElement).clientHeight;

        var percentageOfScreen = (verticalOffset / divHeight) * 100;

        if (percentageOfScreen >= 85 && this.CatalogService.loading == false && this.CatalogService.products.length < 200)
        {
            this.LoadMore();
        }
    }
}


