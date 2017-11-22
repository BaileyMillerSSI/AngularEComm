import { EventEmitter } from "@angular/core";

export class SpecialButton
{
    Hidden: boolean;
    Content: string;
    Disabled: boolean;
    isSubmit: boolean;
    Type: string;
    Click: EventEmitter<null>

    Clicked(): void
    { 

    }
    
}
