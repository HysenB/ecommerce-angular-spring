import { CartItem } from './../common/cart-item';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  // Subject is a subclass of Observable
  // we can use Subject to publish events in our code. The event will be sent to all of the subscribers
  totalPrice:  Subject<number> = new Subject<number>();
  totalQuantity:  Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem){
    // check if we already have the item in our cart
    let alreadyExistsIncart: boolean = false;
    let existingCartItem: CartItem = undefined!;

    if(this.cartItems.length > 0){
      // find the item in the cart based on item id
      // returns first element that passes else returns undefined
      existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id)!;


      // check if we found it
      alreadyExistsIncart = (existingCartItem != undefined);
    }

    if(alreadyExistsIncart){
      // increment the quantity
      existingCartItem.quantity!++;
    }else{
      this.cartItems.push(theCartItem);
    }

    // compute cart total price and total quantity
    this.computeCartTotals();
  
  }
  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity! * currentCartItem.unitPrice!;
      totalQuantityValue += currentCartItem.quantity!;
    }

    // publish the new values .. all subsribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data just for debuggin purposes
    this.logCartData(totalPriceValue, totalQuantityValue);


  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    
    console.log('Contents of the cart');
    for(let tempCartItem of this.cartItems){
      const subTotalPrice = tempCartItem.quantity! * tempCartItem.unitPrice!;
      console.log(`name: ${tempCartItem.name}, quantity=${tempCartItem.quantity}, 
      unitPrice=${tempCartItem.unitPrice}, subTotalPrice=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log('--------');
  }


}
