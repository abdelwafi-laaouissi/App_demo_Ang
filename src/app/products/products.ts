import {Component, OnInit} from '@angular/core';
import {Product} from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{
  PRODUCTS : any;
  constructor(private productsrv : Product) {
  }
  ngOnInit() {
    this.getAllProducts()
  }
  getAllProducts(){
    this.productsrv.getAllProducts().subscribe({
      next : resp =>{
        this.PRODUCTS=resp
      },
      error : err => {
        console.log(err)
      }
    });
  }
  handleDelete(products: any) {
    let confi = confirm('etes vous sure de vouloir supprimer ?');
    if (confi==true){
        this.productsrv.deleteProduct(products).subscribe({
          next : value => {
            this.getAllProducts();
          },
          error : err => {
            console.log(err);
          }
        });

    }

  }
}
