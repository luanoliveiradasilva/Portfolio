import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  private viewPortScroller: ViewportScroller;

  constructor(viewPortScroller: ViewportScroller) {
    this.viewPortScroller = viewPortScroller;
  }
  
  scrollPageWithMenu(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);
  }
}
