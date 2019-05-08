import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaMenuComponent } from './pizza-menu/pizza-menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
@NgModule({
  declarations: [
    AppComponent,
    PizzaMenuComponent,
    AboutUsComponent,
    CheckOutComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
