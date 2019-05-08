import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaMenuComponent } from './pizza-menu/pizza-menu.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
{path: '', component: AboutUsComponent},
{path: 'pizza-menu', component: PizzaMenuComponent},
{path: 'check-out', component: CheckOutComponent},
{path: 'registration', component: RegistrationComponent},
{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
