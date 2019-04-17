import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  today = new Date();


  loremIpsum: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias natus officia quas. Error et obcaecati, ad, asperiores, iure mollitia minus aperiam recusandae inventore corrupti molestias quaerat ex temporibus vero voluptate.";
  
  constructor() { }

  ngOnInit() {
  }

}
