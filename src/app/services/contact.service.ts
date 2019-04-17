import { Injectable } from '@angular/core';
import { Http } from '@angular/http';  // for observables
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: Http ) { }

  create( contactData ){     //1. receive data from comp.ts 
    console.log(contactData);
    //2. send the same data to rest api 
          //2.1  find the api endpoint -- https://jsonplaceholder.typicode.com/users
          //2.2 figure out a http method -- POST
    return this.http.post("https://jsonplaceholder.typicode.com/users", contactData)   // sending data to rest api 
              .pipe(map( (resp ) =>{ //3. receive resp from rest api 
                console.log(resp);
                return resp.json(); //4. send the resp back to comp 
              }));    
  }


  getContacts() { // listening for the call from comp
    return this.http.get("https://jsonplaceholder.typicode.com/users")   // connecting to rest api 
                    .pipe(map( (resp ) =>{ //3. receive resp from rest api  
                      console.log(resp);
                      return resp.json(); //4. send the resp back to comp   -- // pizaa + ketch up + tissue
                    }))
                    
    //return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }

  getContactById(id) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)   // connecting to rest api 
                    .pipe(map( (resp ) =>{ //3. receive resp from rest api 
                      console.log(resp);
                      return resp.json(); //4. send the resp back to comp 
                    }));
  }
  
  updateContact(updatableContactData){

    return this.http.put("https://jsonplaceholder.typicode.com/users/"+updatableContactData.id, updatableContactData)   // sending data to rest api 
              .pipe(map( (resp ) =>{ //3. receive resp from rest api 
                console.log(resp);
                return resp.json(); //4. send the resp back to comp 
              }));
  }
}
