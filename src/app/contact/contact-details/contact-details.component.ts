import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';


import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
 contact!:Contact;
 id!:number
constructor(private route:ActivatedRoute,
           private contactService: ContactService,
           private router:Router){}

ngOnInit(){
  this.route.params.subscribe((params:Params)=>{
    this.id=+params['id'];
    this.contact=this.contactService.getOneContact(this.id)

  })
}

onEdit()
{
  this.router.navigate(['edit'],{relativeTo:this.route})
}
 onDelete(){
  this.router.navigate(['delete'],{relativeTo:this.route})
 }


}
