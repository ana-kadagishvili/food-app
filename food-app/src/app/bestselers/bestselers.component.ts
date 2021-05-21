import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-bestselers',
  templateUrl: './bestselers.component.html',
  styleUrls: ['./bestselers.component.scss']
})
export class BestselersComponent implements OnInit {
  num: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addProductToCart() {this.num++;
    this.cartService.cartNum.next(this.num);}
}
