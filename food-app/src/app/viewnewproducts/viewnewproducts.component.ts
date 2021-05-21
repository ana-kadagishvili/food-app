import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-viewnewproducts',
  templateUrl: './viewnewproducts.component.html',
  styleUrls: ['./viewnewproducts.component.scss']
})
export class ViewnewproductsComponent implements OnInit {
  num: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addProductToCart() {this.num++;
    this.cartService.cartNum.next(this.num);}

}
