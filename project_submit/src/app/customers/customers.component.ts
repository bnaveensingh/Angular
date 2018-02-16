import { Component, OnInit } from '@angular/core';

import { Customer } from '../models/customer';
import { CustomersService } from '../services/customers.service';
import { AppError } from '../common/app-error';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
customers: Customer[] = [];

  constructor(private service: CustomersService) { }

  ngOnInit() {
this.service.getCustomers().subscribe(
      (customers: Customer[]) => {
        console.log('Success! Get Customers Successful!');
        this.customers = customers;
      },
      (error: AppError) => {
        console.log('Failed! Error occurred when getting customers.', error);
      }
    );
  }

}
