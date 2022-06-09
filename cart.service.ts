import { map } from 'rxjs/operators';
// import { product } from './../../../MY-STORE1/src/app/products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 

  public cartItemList: any=[] 
  grandTotal:any;

  public productList= new BehaviorSubject<any>([]);
public search=new BehaviorSubject<string>("")

  constructor(private http:HttpClient) { }
getProducts(){
 return this.productList.asObservable
}
addtoCart(product:any){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList);
  this.getTotalPrice();
  console.log(this.cartItemList)
}
getTotalPrice(){
  this.grandTotal=0
  this.cartItemList.map((a:any)=>{
    this.grandTotal +=a.total;
  })
  return this.grandTotal
}
removeCartItem(product:any){
  this.cartItemList.map((a:any,index:any)=>{
    if(product.id===a.id)
    this.cartItemList.splice(index,1);
  })
  this.productList.next(this.cartItemList);
} 

removeAllCart(){
  this.cartItemList=[];
  this.productList.next(this.cartItemList);
}

setProduct(product:any){
  this.cartItemList.push(...product);
  this.cartItemList.next(product)
}

}
