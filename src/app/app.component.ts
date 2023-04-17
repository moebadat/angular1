import { Component } from '@angular/core';
import { products } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp4';

  constructor(private products:products) {}

  ngOnInit() {
    this.products.getProducts()
      .subscribe(response => {
        this.products = response;
      });
}}


