import { Component, ElementRef, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact/contact.model';
import { ContactService } from '../contact/contact.service';
@Injectable()
@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent {
@ViewChild('name') nameInputRef!:ElementRef;
@ViewChild('phoneNumber') phnoInputRef!:ElementRef

constructor(private contService: ContactService,
            private router:Router){}

onAddNumber(){
    const name=this.nameInputRef.nativeElement.value
    const phoneNumer= this.phnoInputRef.nativeElement.value
    const newContact = new Contact(name,phoneNumer)
    this.contService.addContact(newContact)
    this.router.navigate(['/contacts'])

  }
}
