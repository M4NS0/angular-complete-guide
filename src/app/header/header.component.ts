import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output Example:
  @Output() featureSelected = new EventEmitter<string>();

  collapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature); 
    // the CHILD will @Output (emitt) to  any html PARENT that have (featuredSelected) event
    // in this case will be send to app.component.html <app-header (featureSelected)="onNavigate($event)">
  }
}
