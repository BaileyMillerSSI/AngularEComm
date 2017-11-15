import { Component, Input } from '@angular/core';

@Component({
    selector: 'product-card',
    styleUrls: ['./productcard.component.css'],
    templateUrl: './productcard.component.html'
})
export class ProductCardComponent {

    @Input() Title: string;

}
