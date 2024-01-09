import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shopping-cart-modal',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.css']
})
export class ShoppingCartModalComponent {
  @Input() product: { name: string, price: number } = {name: '', price: 0};

  constructor(public activeModal: NgbActiveModal) {}
}