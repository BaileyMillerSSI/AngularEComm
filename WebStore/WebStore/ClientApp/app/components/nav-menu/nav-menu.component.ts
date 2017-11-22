import { Component } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

    constructor(public CartService: CartService)
    {

    }

}
