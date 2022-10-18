import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';


import { ContactsComponent } from './contacts/contacts.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentsComponent } from './documents/documents.component';
import { MessageListComponent } from './messages/message-list/message-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  {
    path: 'documents',
    component: DocumentsComponent,
    children: [
      
      { path: ':id', component: DocumentDetailComponent },
     
    ],
  },
  { path: 'messages', component: MessageListComponent },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [
     
      { path: ':id', component: ContactDetailComponent },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}