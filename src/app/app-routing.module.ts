import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContentComponent } from './add-content/add-content.component';
import { ContactDeleteComponent } from './contact/contact-delete/contact-delete.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { ContactStartComponent } from './contact/contact-start/contact-start.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'/contacts', pathMatch:'full'},
  {path:'contacts',component:ContactComponent,children:[
    {path:'',component:ContactStartComponent},
    {path:':id',component:ContactDetailsComponent},
    {path:':id/edit',component:ContactEditComponent},
    {path:':id/delete',component:ContactDeleteComponent},
   
  ]},
  {path:'addContact',component:AddContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
