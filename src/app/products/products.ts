import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  PRODUCTS = [
    {id : 1 , name : "produc1", price : 2300, selected : true},
    {id : 2 , name : "produc2", price : 5005, selected : false},
    {id : 3 , name : "produc3", price : 330, selected : true}
  ]
}
