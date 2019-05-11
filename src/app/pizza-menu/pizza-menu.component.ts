import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.scss']
})

export class PizzaMenuComponent implements OnInit {
  pizzaFormGroup: FormGroup

  constructor() {
    this.pizzaFormGroup = this.createFormGroup()
  }

  createFormGroup() {
    return new FormGroup({
      size: new FormControl(),
      cheeseSmallQuantity: new FormControl(),
      cheeseMediumQuantity: new FormControl(),
      cheeseLargeQuantity: new FormControl(),
      cheeseFamilyQuantity: new FormControl(),
      pepperoni: new FormControl(),
      sausage: new FormControl(),
      bacon: new FormControl(),
      ham: new FormControl(),
      mushrooms: new FormControl(),
      greenpeppers: new FormControl(),
      onions: new FormControl(),
      freshTomatos: new FormControl(),
      blackOlives: new FormControl(),
      vegetarianSmallQuantity: new FormControl(),
      vegetarianMediumQuantity: new FormControl(),
      vegetarianLargeQuantity: new FormControl(),
      vegetarianFamilyQuantity: new FormControl(),
      bbqChickenSmallQuantity: new FormControl(),
      bbqChickenMediumQuantity: new FormControl(),
      bbqChickenLargeQuantity: new FormControl(),
      bbqChickenFamilyQuantity: new FormControl(),
      italianSausageQuantity: new FormControl(),
      italianBeefQuantity: new FormControl(),
      comboQuantity: new FormControl()
    })
  }

  ngOnInit() {
  }

  pizzaSubmit() {
    console.log(this.pizzaFormGroup)
  }
}

