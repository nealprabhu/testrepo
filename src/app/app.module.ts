import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { SearchComponent } from './components/shared/header/search.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailComponent } from './components/contacts/contact-detail/contact-detail.component';
import { AboutComponent } from './components/about/about.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';


@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    ContactsComponent,
    AddContactComponent,
    ContactDetailComponent,
    AboutComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule  //,
    //HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
