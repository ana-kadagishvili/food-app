import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BestselersComponent } from './bestselers/bestselers.component';
import { CarticonComponent } from './carticon/carticon.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FamilyboxComponent } from './familybox/familybox.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SnacksComponent } from './snacks/snacks.component';
import { ViewburgersComponent } from './viewburgers/viewburgers.component';
import { ViewnewproductsComponent } from './viewnewproducts/viewnewproducts.component';
import { ViewnuggetsComponent } from './viewnuggets/viewnuggets.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'aboutus',
      component: AboutusComponent,
    },
    {
      path: 'contactus',
      component: ContactusComponent,
    },
    {
      path: 'viewnuggets',
      component: ViewnuggetsComponent,
    },
    {
      path: 'viewburgers',
      component: ViewburgersComponent,
    },
    {
      path: 'viewnewproducts',
      component: ViewnewproductsComponent,
    },
    {
      path: 'snacks',
      component: SnacksComponent,
    },
    {
      path: 'bestselers',
      component: BestselersComponent,
    },
    {
      path: 'carticon',
      component: CarticonComponent,
    },
    {
      path: 'familybox',
      component: FamilyboxComponent,
    },
    {
    path: 'login',
    component: LoginComponent,
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
