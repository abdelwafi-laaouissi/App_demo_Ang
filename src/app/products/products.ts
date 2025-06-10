import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{
  PRODUCTS : any;
  constructor() {
  }
  ngOnInit() {
    this.PRODUCTS=[
      {id : 1 , name : "produc1", price : 2300, selected : true},
      {id : 2 , name : "produc2", price : 5005, selected : false},
      {id : 3 , name : "produc3", price : 330, selected : true}
    ]
  }

  handleDelete(products: any) {
    let confi = confirm('etes vous sure de vouloir supprimer ?');
    if (confi==true){
      this.PRODUCTS = this.PRODUCTS.filter((p : any)=>p.id !=products.id);
    }

  }
}
