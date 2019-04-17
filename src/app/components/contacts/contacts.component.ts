import { Component, OnInit, OnDestroy } from '@angular/core';

import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/models/icontact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: IContact[];
  //contactList: Array<IContact>;

  constructor( private contactService: ContactService) {
    console.log("Inside Constructor");
  }

  ngOnInit() { //lifecycle hook
    console.log("Inside ngOnInit");

    //connect to service 
    this.contactService.getContacts()
                        .subscribe( (resp) => { // get resp from service
                          console.log(resp);
                          this.contactList = resp;
                        });
  }

  ngOnDestroy(){
    console.log("When I navigate away");
    //destroy data
    //unsubscribe 
  }

}