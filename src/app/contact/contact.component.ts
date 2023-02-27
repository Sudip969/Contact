import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
 
})
export class ContactComponent implements OnInit {
contacts!: Contact[]
  constructor(private contactService:ContactService){}
  ngOnInit(){
    this.contacts=this.contactService.getContacts();
  }
}
