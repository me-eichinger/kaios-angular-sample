import { Component, OnInit, Input } from '@angular/core';

export interface Softkeys {
  left: string;
  center: string;
  right: string;
}

@Component({
  selector: 'app-softkeys',
  templateUrl: './softkeys.component.html',
  styleUrls: ['./softkeys.component.css']
})
export class SoftkeysComponent {

  @Input() 
  public softkeys: Softkeys;
  
  private lastPressed: string;

  constructor() { }

}
