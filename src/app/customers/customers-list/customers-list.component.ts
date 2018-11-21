import { Component, OnInit } from '@angular/core';
import {Customer} from '../../shared/models/customers';
import {CustomerService} from '../../shared/services/customer.service';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.refresh();

    //old static
    //this.customers = this.customerService.getCustomers();
  }

  refresh() {
    //Use the Data! Now fetches data from the Backend/Server
    this.customerService.getCustomers()
      .subscribe(listOfCustomers => {
        this.customers = listOfCustomers;
      });
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id)
      .subscribe(message => {
        this.refresh();
      });

    //Old static
    //this.customerService.deleteCustomer(id);
  }


}
