import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-familybox',
  templateUrl: './familybox.component.html',
  styleUrls: ['./familybox.component.scss']
})
export class FamilyboxComponent implements OnInit {
  num: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addProductToCart() {this.num++;
    this.cartService.cartNum.next(this.num);}
}
