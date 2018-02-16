import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Customer } from '../models/customer';
import { AppError } from '../common/app-error';

@Injectable()
export class CustomersService {
  private apiUrl ='http://localhost:3000/customers';
  private customers: Customer[] = [];
  
  constructor(private http: Http) { }

  getCustomers(): Observable<Customer[]> {
    return this.http
      .get(this.apiUrl)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(new AppError(error));
  }
}
