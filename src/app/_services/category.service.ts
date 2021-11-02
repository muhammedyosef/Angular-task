import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Catagory } from '../_modules/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
// private categories:Catagory[]=[
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
url=environment.baseUrl;
  constructor(private http:HttpClient) { }
  getAllcat(){
    return this.http.get(`${this.url}category`)
    // return[...this.categories]
  }
  // getCatByID(id:number):Catagory|undefined{
  //   return this.categories.find((c)=>c.id===id);
  // }
}
