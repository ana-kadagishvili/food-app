import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-viewnuggets',
  templateUrl: './viewnuggets.component.html',
  styleUrls: ['./viewnuggets.component.scss']
})
export class ViewnuggetsComponent implements OnInit {
  num: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addProductToCart() {this.num++;
    this.cartService.cartNum.next(this.num);}
}
