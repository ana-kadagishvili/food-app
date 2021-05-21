import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-viewburgers',
  templateUrl: './viewburgers.component.html',
  styleUrls: ['./viewburgers.component.scss']
})
export class ViewburgersComponent implements OnInit {
  num: number = 0;
  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
  }
  addProductToCart() {this.num++;
    this.cartService.cartNum.next(this.num);}
}
