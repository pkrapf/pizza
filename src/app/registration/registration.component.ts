import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationFormGroup: FormGroup

  constructor(private customerService: CustomerServiceService) {
    this.registrationFormGroup = this.createFormGroup()
  }

  createFormGroup() {
    let zipCode = /^\d{5}(?:[-\s]\d{4})?$/;
    let phone = /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/;
    return new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      streetAddress: new FormControl('', [Validators.required, Validators.minLength(4)]),
      city: new FormControl('', [Validators.required, Validators.minLength(4)]),
      state: new FormControl('NE', [Validators.required]),
      zipCode: new FormControl('', [Validators.required, Validators.pattern(zipCode)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(phone)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      verifyPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, {validators: [this.passwordMatchValidator]})
  }

  registrationSubmit() {
    if (this.registrationFormGroup.valid) {
      this.customerService.postSignup(this.registrationFormGroup.value).subscribe(res => console.log(res));
      this.registrationFormGroup.reset();
    }
  }

  passwordMatchValidator = function (control: FormGroup) {
    let pswd = control.get('password');
    let confirm = control.get('verifyPassword');
    if (!pswd.value && !confirm.dirty && confirm.untouched) {
      return null;
    }
    return (pswd.value === confirm.value) ? null : { 'mismatch': true };
  }

  ngOnInit() {
  }

}
