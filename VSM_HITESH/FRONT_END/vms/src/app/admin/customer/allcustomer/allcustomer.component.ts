import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../Services/Customer/customer.service'; // Adjust the path as needed

@Component({
  selector: 'app-allcustomer',
  templateUrl: './allcustomer.component.html',
  styleUrls: ['./allcustomer.component.css']
})
export class AllcustomerComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data: any) => {
      this.customers = data;
    });
  }
}
