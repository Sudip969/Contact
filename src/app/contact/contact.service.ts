
import { Contact } from "./contact.model";
export class ContactService{

contacts:Contact[]=[]
getContacts(){
    return this.contacts
}
getOneContact(index:number){
    return this.contacts[index];
}
addContact(contact:Contact){
    this.contacts.push(contact);
    this.getContacts();

    alert('Contact Added Successfully');
}
deleteContact(index:number){
    this.contacts.splice(index, 1);
    this.getContacts()
    alert("Contact Removed Successfully")
   
}
}