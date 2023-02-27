import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AddContentComponent } from './add-content/add-content.component';
import { HeaderComponent } from './header/header.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactStartComponent } from './contact/contact-start/contact-start.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { ContactService } from './contact/contact.service';
import { ContactDeleteComponent } from './contact/contact-delete/contact-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddContentComponent,
    HeaderComponent,
    ContactDetailsComponent,
    ContactListComponent,
    ContactStartComponent,
    ContactEditComponent,
    ContactDeleteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
