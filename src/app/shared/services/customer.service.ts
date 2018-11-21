import { Injectable } from '@angular/core';
import {Customer} from '../models/customers';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  /* //Handle Static Data!
  customers: Customer[];
  id = 1; */
  apiUrl = 'http://customerappproject.azurewebsites.net/api/customers'; //LocalHost NOGOOD!

  constructor(private http: HttpClient) {
  /*
    //Static Data!
    this.customers = [
      {id: this.id++, firstName: 'Danni', lastName: 'Vase', address: 'Esbjerg'},
      {id: this.id++, firstName: 'Bill', lastName: 'Bo', address: 'Baggins'}];
  */
  }
  //CRUD Operations!
  getCustomers(): Observable<Customer[]> {
    //TODO Call Rest API!
    return this.http.get<Customer[]>(this.apiUrl);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);

    /* OLD STATIC
    customer.id = this.id++;
    this.customers.push(customer); */
  }
  updateCustomer(customer: Customer): Observable<Customer> {
    //Using RestAPI
    return this.http.put<Customer>(this.apiUrl + '/' + customer.id, customer)

    /*
    //TODO Call Rest API!
    const custToUpdate = this.customers.find(cust => customer.id === cust.id);
    const index = this.customers.indexOf(custToUpdate);
    this.customers[index] = customer;
    */

  }
  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + '/' + id);

    // Old static
    //return this.customers.find(cust => cust.id === id);
  }
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);

    //Old Static
    //this.customers = this.customers.filter(cust => cust.id !== id);

  }
}
