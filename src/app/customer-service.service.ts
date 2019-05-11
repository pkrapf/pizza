import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }
  public postSignup(customer: Object) {
    console.log(customer);
    return this.http.post(`/customer/signup/`, customer);
  }
}
