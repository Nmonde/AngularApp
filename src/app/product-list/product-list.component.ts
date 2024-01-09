import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartModalComponent } from '../shopping-cart-modal/shopping-cart-modal.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Output() addToCartClick: 
  EventEmitter<{ category: string, product: string }> = new EventEmitter();
 
  products: { [category: string]: {name: string, price: number}[] } = {
    'Sneakers': [{name: 'Product 1', price: 300 }],
    'Clothing': [{name: 'Product 2', price: 500 }],
    'Accessories': [{name: 'Product 3', price: 1000 }]
  };
     
    constructor(private modalService: NgbModal) {}

    addToCart(category: string, productName: string) {
      const selectedProduct = this.products[category].find(product => product.name === productName);
  
      if (selectedProduct) {
        console.log(`Added ${selectedProduct.name} from category ${category} to the cart`);
  
        // This logic opens the shopping cart modal
        const modalRef = this.modalService.open(ShoppingCartModalComponent);
        modalRef.componentInstance.product = selectedProduct;
      }
    }
  }