import { Component } from '@angular/core';


export class AppModule {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-app';
}


// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     DragScrollModule,
    
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })

//  export class AppModule {
//  }







// import { Component } from '@angular/core';
// // import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  
//   constructor(config: NgbCarouselConfig) {
//     // customize default values of carousels used by this component tree
//     config.interval = 1500;
//     config.wrap = false;
//     config.keyboard = false;
//     config.pauseOnHover = false;
//     config.wrap = true;
//   }
// }