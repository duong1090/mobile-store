import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  itemsList = [];

  constructor(private cartService: CartService, private router: Router) {}

  onRemove = (item: any, index: any) => {
    this.cartService.removeCart(item).subscribe((data) => {
      if (data) {
        console.log('removeCartSuccess:::');
        if (this.itemsList.length) this.itemsList.splice(index, 1);
      }
    });
  };

  getCart = () => {
    this.cartService.getCart().subscribe((data) => {
      if (data && data.length) {
        this.itemsList = data;
      }
    });
  };

  ngOnInit(): void {
    this.getCart();
  }
}
