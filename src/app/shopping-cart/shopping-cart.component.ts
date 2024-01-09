import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
cartItems: any[] = [];
addToCart(product: any) {
  // check if product already inside the cart
  const existingItem = this.cartItems.find(item => item.product === product);
  if(existingItem) {
    // increment the quanity of product already in cart
    existingItem.quanity++;
  } else {
    // or add a new product if product does not exist in cart
    this.cartItems.push({product, quantity: 1});
  }
}
removeFromCart(item:any) {
  // remove products from cart
  const index = this.cartItems.indexOf(item);
  if (index !== -1) {
    this.cartItems.splice(index, 1);
  }
}
}

