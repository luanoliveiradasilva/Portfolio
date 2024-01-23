import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    pathImage: string;

    constructor(){
      this.pathImage = '/assets/images/wallpaper.jpg';
    }

    //TODO add row with bootstrap https://getbootstrap.com/docs/4.0/layout/grid/
}
