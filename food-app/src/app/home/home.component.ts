import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}




// import { Component, OnInit } from '@angular/core';
// import {NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
// import{ Router } from '@angular/router';

// @Component({
//   selector: 'app-slider',
//   templateUrl: './slider.component.html',
//   styleUrls: ['./slider.component.scss'],
//   providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
// })
// export class SliderComponent implements OnInit {
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   constructor(private router: Router) {}

//   images = [ '../../assets/mogshivda.png', '../../assets/modzebne-1.png', '../../assets/sheukvetee.png', '../../assets/mogitant.png',]
//   btnClick=  () => {
//     this.router.navigateByUrl('/foodlist');
// }
// }