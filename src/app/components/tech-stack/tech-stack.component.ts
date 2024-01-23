import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent {

  pathImage: string[] = [];

  constructor() {
    this.pathImage.push(
      'java.svg', 
      'kotlin.svg', 
      'csharp.svg',
      'spring.svg', 
      'github.svg',             
      'ij.svg', 
      'visual-studio.svg', 
      'vscode.svg',
      'ibm.svg',       
      'aws.svg',      
      'docker.svg');
  }

  //TODO retornar para adicionar via encapsulamento e ou injecao de dependencia.
  //TODO ajustar para que os nomes dos arquivos não fiquem na mesma pasta.

}
