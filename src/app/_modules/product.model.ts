import { data } from "./data.model";
import { Catagory } from "./category.model";
import { Payment } from "./Payment-Type.model";
import { Tags } from "./Tags.model";

 export interface Product{
   id?:number;
    // name:string;
    data:data[];
    price?:number;
    discount?:number;
    paymentmethod:Payment[];
    categoryId?: number;
    tags?:Tags[];
    imagesUrls?:string;
}
