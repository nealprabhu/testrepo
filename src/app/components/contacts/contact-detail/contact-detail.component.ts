import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute } from '@angular/router';

import { IContact } from 'src/app/models/icontact';

declare var $: any;   //use jquery with in this component

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styles: []
})
export class ContactDetailComponent implements OnInit {

  contactId: number;
  contactData: IContact;
  editableContactData: IContact;
  isUpdated: boolean;

  constructor( private contactService: ContactService, private activatedRoute: ActivatedRoute){ 
    // this.activatedRoute.params.subscribe(params => {
    //     this.contactId = params['contactId'];
    //     console.log(this.contactId); // Print the parameter to the console. 
    // });

    console.log(this.activatedRoute.snapshot.params['contactId']);
  }

  ngOnInit() {
    //connect to service 
    this.contactService.getContactById(this.contactId)
                        .subscribe( (resp) => {
                          console.log(resp);
                          this.contactData = resp;
                        })

  }

  launchEditModal(){
    this.editableContactData = JSON.parse(JSON.stringify(this.contactData)); 
    $("#editModal").modal('show');
  }

  updateHandler(){
    console.log(this.editableContactData);
    this.contactService.updateContact(this.editableContactData)
                        .subscribe( (resp) => {
                          console.log(resp);
                          if(resp){
                            this.isUpdated = true;
                            setTimeout( ()=>{
                              $("#editModal").modal('hide');
                              this.contactData = resp;  // assign the updated data in original data
                              //redirect
                            }, 3000);

                            
                          }

                        })
  }
}
