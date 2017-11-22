import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { SpecialButton } from "../special-button";

@Component({
  selector: 'load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit, OnChanges, SpecialButton {

    @Input() Animate: boolean = false;
    @Input() Hidden: boolean = false;
    @Input() Content: string = "Load More";
    @Input() Disabled: boolean = false;

    @Input() isSubmit: boolean = false;
    get Type(): string { return (this.isSubmit ? 'submit' : 'button') }

    @Output() Click: EventEmitter<null> = new EventEmitter<null>();

    @ViewChild('btnIcon') Icon: ElementRef;

    Clicked(): void
    {
        this.Click.emit();
    }

    constructor()
    {

    }

    ngOnInit()
    {

    }

    ngOnChanges(changes: SimpleChanges)
    {
        if (changes['Animate'])
        {//Animate has changed
            var _icon = (this.Icon.nativeElement as HTMLElement);

            if (changes['Animate'].previousValue == false && changes['Animate'].currentValue == true) {
                //Went from not animating to start animating
                _icon.classList.remove('fa-chevron-circle-down');
                _icon.classList.add('fa-spinner', 'fa-pulse');
            } else if (changes['Animate'].previousValue == true && changes['Animate'].currentValue == false)
            {
                _icon.classList.remove('fa-spinner', 'fa-pulse');
                _icon.classList.add('fa-chevron-circle-down');
            }
        }
    }

}
