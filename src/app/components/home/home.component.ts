import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  pathImage: string[] = [];

 
  constructor() {
    this.pathImage.push(
      '1533563262507.jpeg');
  }
}
