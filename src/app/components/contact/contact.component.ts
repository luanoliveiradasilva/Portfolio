import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private apiURL = 'https://localhost:44332/api/SendEmail';
  to: string = '';
  from: string = '';
  subject: string = '';
  mensage: string = '';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  

  postSendEmailData() {

    const data = {
      to: this.to,
      from: this.from,
      subject: this.subject,
      mensage: this.mensage
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const teste = this.http.post(`${this.apiURL}`, data,
      {
        headers
      }).subscribe(response => {
        console.log('Resposta da chamada POST:', response);
      });

      console.log(teste);
  }

}
