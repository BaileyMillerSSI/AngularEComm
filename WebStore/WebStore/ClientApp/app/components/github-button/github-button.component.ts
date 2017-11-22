import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'github-button',
    templateUrl: './github-button.component.html',
    styleUrls: ['./github-button.component.css']
})
export class GithubButtonComponent implements OnInit {
    @Input() href: string = ""

    @Input() Width: number = 32;
    @Input() Height: number = 32;

    constructor()
    {

    }

    ngOnInit()
    {

    }

}
