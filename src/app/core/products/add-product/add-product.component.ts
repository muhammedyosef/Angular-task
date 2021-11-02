import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Catagory } from 'src/app/_modules/category.model';
import { Payment } from 'src/app/_modules/Payment-Type.model';
import { Product } from 'src/app/_modules/product.model';
import { Tags } from 'src/app/_modules/Tags.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentService } from 'src/app/_services/payment.service';
import { ProductsServicesService } from 'src/app/_services/products-services.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @ViewChild('myForm') form!: ElementRef;
categories!:Catagory[];
pymentType!:Payment[];
tag:Tags[];
isEditMode=false;
  product= <Product>{};
  constructor(private CategoryService:CategoryService,private PaymentService:PaymentService,private productService:ProductsServicesService,private router:Router,private activatedRoute:ActivatedRoute) {
    // this.categories=[
    //   {id:1,name:"Arts & Crafts"},
    //   {id:2,name:"Automotive"},
    //   {id:3,name:"Baby"},
    //   {id:4,name:"Books"},
    //   {id:5,name:"Eletronics"},
    //   {id:6,name:"Women's Fashion"},
    //   {id:7,name:"Men's Fashion"},
    //   {id:8,name:"Health & Household"},
    //   {id:9,name:"Home & Kitchen"},
    //   {id:10,name:"Military Accessories"},
    //   {id:11,name:"Movies & Television"},
    // ]
    // this.pymentType=[
    //   {id:1,name:"Direct Bank"},
    //   {id:2,name:"Cheque Payment"},
    //   {id:3,name:"Paypal"},
    //   {id:4,name:"Visa"},
    //   {id:5,name:"Mastercard"},
    //   {id:6,name:"Meza"},
    // ]
    this.tag=[
      {id:1,name:"tag1"},
      {id:2,name:"tag2"},
      {id:3,name:"tag3"},
      {id:4,name:"tag4"},
      {id:5,name:"tag5"},
      {id:6,name:"tag6"},
      {id:7,name:"tag7"},
      {id:8,name:"tag8"},
      {id:9,name:"tag9"},
      {id:10,name:"tag10"},
      {id:11,name:"tag11"},
      {id:12,name:"tag12"},
    ]
    this.product={
      id:1,
      data:[{name:"camera",description:"this is camera"}],
      paymentmethod:[],
      tags:[],


    }
   }

  ngOnInit(): void {
    this.CategoryService.getAllcat().subscribe(
      (res)=>{
        this.categories=res as Catagory[];
      }
    );
    this.pymentType=this.PaymentService.getAllpay();
    console.log(this.pymentType);
     const pord=this.activatedRoute.snapshot.params.id;
     if(pord){
     const product=this.productService.getProdById(+pord);

      //  this.product={...product};
       this.isEditMode=true;
     }

  }
  onSubmit(form:NgForm){
    // const cat=this.CategoryService.getCatByID(+form.value.category);
    // if(cat){
    //   this.product.catagory= cat;
    // }
    this.product.paymentmethod=[];
    for(let index=0;index<this.pymentType.length;index++){
      if(form.value['check_'+index]){
        this.product.paymentmethod.push(this.pymentType[index]);
      }
    }
    // console.log(this.product);
    // console.log(form);

if(this.isEditMode){
  this.productService.updateProd(this.product)
}else{
  this.productService.addProduct(this.product).subscribe(
    (res)=>{console.log(res);
    }
  )

}

  }
  ontagAdded(taginupt:HTMLInputElement){
    this.product.tags?.push({name:taginupt.value})
    taginupt.value="";
  }

}
