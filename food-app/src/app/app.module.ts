import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ViewnuggetsComponent } from './viewnuggets/viewnuggets.component';
import { ViewburgersComponent } from './viewburgers/viewburgers.component';
import { ViewnewproductsComponent } from './viewnewproducts/viewnewproducts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SnacksComponent } from './snacks/snacks.component';
import { BestselersComponent } from './bestselers/bestselers.component';
import { CarticonComponent } from './carticon/carticon.component';
import { FamilyboxComponent } from './familybox/familybox.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ViewnuggetsComponent,
    ViewburgersComponent,
    ViewnewproductsComponent,
    SliderComponent,
    SnacksComponent,
    BestselersComponent,
    CarticonComponent,
    FamilyboxComponent,
    LoginComponent
  ],
  imports: [
    DragScrollModule,
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot({} ,{}),
    NgbModule,
   
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }




