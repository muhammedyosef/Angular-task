import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/_modules/product.model';
import { ProductsServicesService } from 'src/app/_services/products-services.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
@Input() product!:Product;
  prod1: Product[]=[] ;
// @Output() itemAdded= new EventEmitter<any>();
  constructor(private productService:ProductsServicesService) { }

  ngOnInit(): void {

  }
  getPrice(){
    // return this.product.discount
    // ?this.product.price-this.product.discount
    // :this.product.price;
  }
  itemAddedToCart(){

this.productService.itemAdded.emit(this.product);

  }
  deleteProds(id:number|undefined){
    // alert("hi")
 this.prod1=this.productService.deleteProd(id)
 console.log(this.prod1);

 this.productService.deletedItem.emit(this.prod1)
  }

}
