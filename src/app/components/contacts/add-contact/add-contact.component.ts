import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  isSaved: boolean;

  constructor( private contactService: ContactService, private router: Router ) {  // dependency injection

  }

  ngOnInit() {
  }

  addContactHandler( formData: NgForm) :void { //1. receive data from comp.html
    console.log(formData);
    //2. send the formData to service
    this.contactService.create(formData.value)
                      .subscribe( (resp) => {  // 3. receiving resp from service
                        console.log(resp);
                        if(resp){
                          this.isSaved = true;
                          setTimeout( () => {
                            //redirect to all contacts page
                            this.router.navigateByUrl("/contacts");
                            //electronics/tv/samsung/89324/edit
                            // this.router.navigate(['electronics', 'tv', 'samsung', 89324, 'edit']);
                            
                          }, 3000 );
                        }
                      })
    
  }
}
