import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  private viewPortScroller: ViewportScroller;

  constructor(viewPortScroller: ViewportScroller){
    this.viewPortScroller = viewPortScroller;
  }
  
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  scrollPageWithMenu(elementId: string): void{ 
      this.viewPortScroller.scrollToAnchor(elementId);
  }
}
