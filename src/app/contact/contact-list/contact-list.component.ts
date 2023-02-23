import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
@Output() selectContact= new EventEmitter<Contact>();
contacts:Contact[]=[
  new Contact("Sudip",6370533969),
  new Contact("Sahil",8246974683)
]
onSelected(contact:Contact){
  this.selectContact.emit(contact);
}
}
