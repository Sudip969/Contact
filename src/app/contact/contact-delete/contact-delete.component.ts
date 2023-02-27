import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent implements OnInit{
id!:number

constructor(private route:ActivatedRoute,
            private router:Router,
            private location:Location,
            private contactService: ContactService){}
ngOnInit(){
  this.route.params.subscribe((params:Params)=>{
    this.id=+params['id']
  })
}
delete(){
 
  this.contactService.deleteContact(this.id);
  this.router.navigate(['/contacts']);
  
}
cancel(){
  // this.router.navigate(['/contacts'])
  this.location.back();
}

}
