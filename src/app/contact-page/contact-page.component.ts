import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;
  constructor() { }

  ngOnInit(): void {
  }

  processForm(){
    const allInfo=`Numele meu este ${this.name}. Adresa mea de email este ${this.email} si acesta este mesajul meu: ${this.message}`;
    alert(allInfo);
  }
}
