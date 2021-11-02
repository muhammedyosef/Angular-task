import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { filter } from 'src/app/_modules/filter.model';
import { Product } from 'src/app/_modules/product.model';
import { ProductsServicesService } from 'src/app/_services/products-services.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  // @Output() OutputItem = new EventEmitter<Product>();
 ProductListArray!:Product[]
 FilterListArray:filter[]
 @Input()numberOfItemsPerPage:number=9;
 noOfPagesArray:number[]=[];
 productsArrayToBeViewed:Product[]=[];
 currentPage:number=0;
 @ViewChild('inputitem') inupts!:ElementRef;
//  productService=new ProductsServicesService
  constructor(private productService:ProductsServicesService) {
// this.ProductListArray=[
//   {name:'camera',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'phone',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'laptop',price:100,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'pod',price:100,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'watch',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'camera',price:100,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'camera',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'camera',price:100,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},
//   {name:'tv',price:100,discount:50,imagesUrls:'assets/img/layout-styles.png'},

// ]
this.FilterListArray=[
  {name:"Arts & Crafts",id:1},
  {name:"Automotive",id:2},
  {name:"Baby"},
  {name:"books",id:5},
  {name:"Electonic",id:4},
  {name:"anything"},
  {name:"whatever"},
  {name:"ok",id:6},
  {name:"agains",id:8},
  {name:"Arts & Crafts",id:9},
]
  }
  ngOnInit(): void {
    this.productService.getAllProd().subscribe(
      (res)=>{
        console.log(res);
        this.ProductListArray = res.product
        this.sliceArray();
        this.calculatePageNumbers();
      }
    );

    this.productService.deletedItem.subscribe(
      (next:Product[])=>{
        // this.ProductListArray.push(next)

        this.ProductListArray=next;
        this.sliceArray();
      }
    )

    // this.ProductListArray=this.productService.getAllProd();

    // const numberOfpages=Math.ceil(
    //   this.ProductListArray.length/this.numberOfItemsPerPage
    // );
    // for(let index=0;index<numberOfpages;index++){
    //   this.noOfPagesArray.push(index+1)
    // }

    // this.sliceArray()
  }
//   newItemAdded(product:Product){
// // this.OutputItem.emit(product)

//   }
  sliceArray(){
    this.productsArrayToBeViewed=this.ProductListArray.slice(this.currentPage*this.numberOfItemsPerPage,this.currentPage*this.numberOfItemsPerPage+this.numberOfItemsPerPage);
  }
  calculatePageNumbers(){
    const numberOfPages = Math.ceil(
      this.ProductListArray.length / this.numberOfItemsPerPage
    );

    for (let index = 0; index < numberOfPages; index++) {
      this.noOfPagesArray.push(index + 1);
    }

  }

  onPagination(i:number){
    if(i>-1&&i<this.noOfPagesArray.length)
    this.currentPage=i;
    this.sliceArray();
  }
   onSearch(){

     const arr=[]
    for (var i=0; i < this.ProductListArray.length; i++) {
        if (this.ProductListArray[i].data[0].name === (this.inupts.nativeElement as HTMLInputElement).value) {
            arr.push(this.ProductListArray[i]);
        }
    }
    this.ProductListArray=arr;
    this.sliceArray();
    // this.ProductListArray=this.productService.getAllProd();

}

}
