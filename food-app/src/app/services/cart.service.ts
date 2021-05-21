import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  public cartNum = new BehaviorSubject<number>(0);

  constructor() { }
}
