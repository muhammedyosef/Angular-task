import { Injectable } from '@angular/core';
import { Payment } from '../_modules/Payment-Type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
private pymentType=[
  {id:1,name:"Direct Bank"},
  {id:2,name:"Cheque Payment"},
  {id:3,name:"Paypal"},
  {id:4,name:"Visa"},
  {id:5,name:"Mastercard"},
  {id:6,name:"Meza"},
]
  constructor() { }
  getAllpay():Payment[]{
    return[...this.pymentType]
  }
  getPayById(id:number):Payment|undefined{
    return this.pymentType.find((p)=>p.id===id);
  }
}
