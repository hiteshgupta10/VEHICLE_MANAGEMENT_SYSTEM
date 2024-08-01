import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../Services/Customer/customer.service'; // Adjust the path as needed
import { Router } from '@angular/router';

@Component({
  selector: 'app-crudcustomer',
  templateUrl: './crudcustomer.component.html',
  styleUrls: ['./crudcustomer.component.css']
})
export class CrudcustomerComponent  {
  // customerForm: FormGroup;

  // constructor(
  //   private fb: FormBuilder,
  //   private customerService: CustomerService,
  //   private router: Router
  // ) {
  //   this.customerForm = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     phone: ['', Validators.required]
  //   });
  // }

  // ngOnInit(): void {}

  // onSubmit(): void {
  //   if (this.customerForm.valid) {
  //     this.customerService.addCustomer(this.customerForm.value).subscribe(() => {
  //       this.router.navigate(['/customers']);
  //     });
  //   }
  // }
}
