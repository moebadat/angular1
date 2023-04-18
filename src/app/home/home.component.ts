import { Component } from '@angular/core';
import { products } from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private product:products) {}

  items:any;

 ngOnInit() {
   this.product.getProducts()
     .subscribe(response => {
       this.items = response;
        console.log(this.items[0]);
     });

     
}
  
}




