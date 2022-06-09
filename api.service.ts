// import { product } from './../../../MY-STORE1/src/app/products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { employeemodel } from 'src/app/emp';
// import { employeemodel } from 'src/app/emp';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  AddEmployee(empobj: employeemodel) {
    throw new Error('Method not implemented.');
  }
  // AddEmployee(empobj: employeemodel) {
  //   throw new Error('Method not implemented.');
  // }
  getTotalPrice(): number {
    throw new Error('Method not implemented.');
  }
  search: any;
  removeAllCart() {
    throw new Error('Method not implemented.');
  }
  removeCartItem(item: any) {
    throw new Error('Method not implemented.');
  }
 
  addtoCart(item: any) {
    throw new Error('Method not implemented.');
  }
  
  
  public cartItemList:any=[]
  public productList=new BehaviorSubject<any>([]);
  grandTotal: any;

  constructor(private http:HttpClient) { }
  getProduct(){
return this.http.get<any>("https://fakestoreapi.com/products")
.pipe(map((res:any)=>{
  return res;
}))
  }


  // this.productList.next(this.cartItemList);
  // this.getTotalPrice()
  // console.log(this.cartItemList)

  getProducts(){
    return this.http.get("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }));
  }
}

  // getTotalPrice() {
  //  this.grandTotal=0;
  //  this.cartItemList.map((a:any)=>{
  //  this.grandTotal +=a.total;
  //  })
  //  return this.grandTotal;
  // }

// removeCartItem(product:any){
//   this.cartItemList.map((a:any,index:any)=>{
//     if(product.id===a.id){
//       this.cartItemList.splice(index,1);
//     }
//   })
// }

// removeAllCart(){
//   this.cartItemList=[]
//   this.productList.next(this.cartItemList);
// }

// setProduct(product:any){
//   this.cartItemList.push(...product);
//   this.productList.next(product);
// }


// function getProducts() {
//   throw new Error('Function not implemented.');
// }




