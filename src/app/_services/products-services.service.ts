import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../_modules/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {
  private products!:Product[];
url=environment.baseUrl;
// private products:Product[]=[
//   {id:1,
//     data:[{id:1,name:"camera",desc:"this is camera",Lang:[{id:1,name:"eng"}]}],
//     catagory:{id:1,name:"Arts"},
//     paymentmethod:[{id:1,name:"visa"}],
//     price:100,
//     discount:50,
//     imagesUrls:'assets/img/layout-styles.png'},
//     {id:2,
//       data:[{id:1,name:"camera",desc:"this is camera",Lang:[{id:1,name:"eng"}]}],
//       catagory:{id:1,name:"Arts"},
//       paymentmethod:[{id:1,name:"visa"}],
//       price:100,
//       discount:50,
//       imagesUrls:'assets/img/layout-styles.png'},
//       {id:3,
//         data:[{id:1,name:"camera",desc:"this is camera",Lang:[{id:1,name:"eng"}]}],
//         catagory:{id:1,name:"Arts"},
//         paymentmethod:[{id:1,name:"visa"}],
//         price:100,
//         discount:50,
//         imagesUrls:'assets/img/layout-styles.png'},
//       {id:4,
//           data:[{id:1,name:"camera",desc:"this is camera",Lang:[{id:1,name:"eng"}]}],
//           catagory:{id:1,name:"Arts"},
//           paymentmethod:[{id:1,name:"visa"}],
//           price:100,
//           discount:50,
//           imagesUrls:'assets/img/layout-styles.png'},
//       {id:5,
//             data:[{id:1,name:"camera",desc:"this is camera",Lang:[{id:1,name:"eng"}]}],
//             catagory:{id:1,name:"Arts"},
//             paymentmethod:[{id:1,name:"visa"}],
//             price:100,
//             discount:50,
//             imagesUrls:'assets/img/layout-styles.png'},
//       {id:6,
//               data:[{id:1,name:"camera",desc:"this is camera",Lang:[{id:1,name:"eng"}]}],
//               catagory:{id:1,name:"Arts"},
//               paymentmethod:[{id:1,name:"visa"}],
//               price:100,
//               discount:50,
//               imagesUrls:'assets/img/layout-styles.png'},
//       {id:7,
//                 data:[{id:1,name:"camera",desc:"this is camera",Lang:[{id:1,name:"eng"}]}],
//                 catagory:{id:1,name:"Arts"},
//                 paymentmethod:[{id:1,name:"visa"}],
//                 price:100,
//                 discount:50,
//                 imagesUrls:'assets/img/layout-styles.png'},
//       {id:8,
//                   data:[{id:1,name:"camera",desc:"this is camera",Lang:[{id:1,name:"eng"}]}],
//                   catagory:{id:1,name:"Arts"},
//                   paymentmethod:[{id:1,name:"visa"}],
//                   price:100,
//                   discount:50,
//                   imagesUrls:'assets/img/layout-styles.png'},
//       {id:9,
//                     data:[{id:1,name:"camera",desc:"this is camera",Lang:[{id:1,name:"eng"}]}],
//                     catagory:{id:1,name:"Arts"},
//                     paymentmethod:[{id:1,name:"visa"}],
//                     price:100,
//                     discount:50,
//                     imagesUrls:'assets/img/layout-styles.png'},
//       {id:10,
//                       data:[{id:1,name:"camera",desc:"this is camera",Lang:[{id:1,name:"eng"}]}],
//                       catagory:{id:1,name:"Arts"},
//                       paymentmethod:[{id:1,name:"visa"}],
//                       price:100,
//                       discount:50,
//                       imagesUrls:'assets/img/layout-styles.png'},
//       {id:11,
//                         data:[{id:1,name:"camera",desc:"this is camera",Lang:[{id:1,name:"eng"}]}],
//                         catagory:{id:1,name:"Arts"},
//                         paymentmethod:[{id:1,name:"visa"}],
//                         price:100,
//                         discount:50,
//                         imagesUrls:'assets/img/layout-styles.png'},
//       {id:12,
//                           data:[{id:1,name:"camera",desc:"this is camera",Lang:[{id:1,name:"eng"}]}],
//                           catagory:{id:1,name:"Arts"},
//                           paymentmethod:[{id:1,name:"visa"}],
//                           price:100,
//                           discount:50,
//                           imagesUrls:'assets/img/layout-styles.png'},
  // {id:2,name:'phone',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:3,name:'laptop',price:100,imagesUrls:'assets/img/layout-styles.png'},
  // {id:4,name:'pod',price:100,imagesUrls:'assets/img/layout-styles.png'},
  // {id:5,name:'watch',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:6,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:7,name:'camera',price:100,imagesUrls:'assets/img/layout-styles.png'},
  // {id:8,name:'camera',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:9,name:'camera',price:100,imagesUrls:'assets/img/layout-styles.png'},
  // {id:10,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:11,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:12,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:13,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:14,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:15,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:16,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:17,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:18,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:19,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:20,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:21,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
  // {id:22,name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},

//]
itemAdded=new EventEmitter<Product>();
deletedItem= new EventEmitter<Product[]>();
  constructor(private http:HttpClient) { }
  getAllProd(): Observable<{product: Product[]}> {
  return this.http.get<{product: Product[]}>(`${this.url}product`);

    // return[...this.products]
  }
  getProdById(id:number):Product|undefined{
    return this.products.find((prod)=>prod.id===id)
  }
  addProduct(product: Product): Observable<any> {
    return this.http.post(`${this.url}product/add`, product)
    // this.products.push(product);
    // this.productsChanged.emit([...this.products]);
    // return [...this.products];
  }
  updateProd(product:Product):Product[]{
    const index=this.products.findIndex((p)=>p.id===product.id);
    this.products[index]=product;
    return[...this.products]
  }
  deleteProd(id:number|undefined):Product[]{
    const index= this.products.findIndex((p)=>p.id===id);
    this.products.splice(index,1);
    return[...this.products];

  }
}
