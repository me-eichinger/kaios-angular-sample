import { Component, OnInit, HostListener } from '@angular/core';
import { Softkeys } from '../softkeys/softkeys.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  public softkeys: Softkeys = { left: 'Zoom out', center: '', right: 'Zoom in' };

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:keydown.softright')
  onSoftRight() {
    alert("rechtsklick");
  }

  @HostListener('document:keydown.softleft')
  onSoftLeft() {
   alert("linksklick");
  }

  @HostListener('document:keydown.enter')
  onEnter() {
    alert("enter");   
  }

}
