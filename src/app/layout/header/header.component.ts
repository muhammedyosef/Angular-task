import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_modules/product.model';
import { ProductsServicesService } from 'src/app/_services/products-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
arrayOfProducs:Product[]=[];
  constructor(private productService:ProductsServicesService) { }

  ngOnInit(): void {
    this.productService.itemAdded.subscribe(
      (next)=>{
        console.log(next);

        this.arrayOfProducs.push(next)
      }
    )
  }

}
