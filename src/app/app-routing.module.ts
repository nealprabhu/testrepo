import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailComponent } from './components/contacts/contact-detail/contact-detail.component';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './guards/auth.guard';

// Let's have the routes configure
const ROUTES: Routes = [
  // syntax : path should have string and the component when that path is hit
  { path: '', component: ContactsComponent },
  { path: 'contacts', component: ContactsComponent},
  { path: 'contacts/new', component: AddContactComponent, canActivate: [ AuthGuard ] },
  { path: 'contacts/:contactId', component: ContactDetailComponent },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
