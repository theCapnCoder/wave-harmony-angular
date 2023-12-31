import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items = this.cartService.getItems();

  chechoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    // this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.chechoutForm.value);
    this.chechoutForm.reset();
  }
}
