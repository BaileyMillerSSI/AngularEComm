import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css']
})
export class SavingComponent implements OnInit {

  @Input() height: number;
  @Input() loading: boolean;
  @Input() loadingText: string;

  padding: number;

  constructor()
  { 
  }

  ngOnInit()
  {
    this.padding = this.height / 4;
  }
}
