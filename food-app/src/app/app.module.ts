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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ViewnuggetsComponent,
    ViewburgersComponent,
    ViewnewproductsComponent
  ],
  imports: [
    DragScrollModule,
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot({} ,{}),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




