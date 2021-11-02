import { Component } from '@angular/core';
import { Product } from './_modules/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productArray:Product[]=[]
  title = 'FirstApp';

  OutputItemAdded(product:Product){

this.productArray.push(product);
  }
}
