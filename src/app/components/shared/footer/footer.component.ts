import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="container">
      <hr>
      <!-- nav should come here-->
      <app-nav></app-nav>
      <p>&copy; Company 2017-2018</p>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
