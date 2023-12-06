import { Injectable } from '@angular/core';

interface Item {
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})

export class CartService {
  items: Item[] = [
    {
      name: 'Item 1',
      price: 10,
    },
    {
      name: 'Item 2',
      price: 20,
    },
  ];
  constructor() {}

  getItems(): Item[] {
    return this.items;
  }

  clearCart(): Item[] {
    return [];
  }
}
