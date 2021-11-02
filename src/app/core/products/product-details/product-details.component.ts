import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_modules/product.model';
import { ProductsServicesService } from 'src/app/_services/products-services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product!:Product ;
  constructor(private productService:ProductsServicesService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id=+this.activatedRoute.snapshot.params.id;
    const product=this.productService.getProdById(id);
    console.log(product);

    if(!product){
      // console.log(product);

      alert('error happened');
    }else{
      this.product= product
    }
  }

}
