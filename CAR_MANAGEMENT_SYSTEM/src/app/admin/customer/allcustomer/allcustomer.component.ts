// import { Component, OnInit } from '@angular/core';
// import { CustomerService } from '../../../Services/Customer/customer.service';

// @Component({
//   selector: 'app-allcustomer',
//   templateUrl: './allcustomer.component.html',
//   styleUrls: ['./allcustomer.component.css']
// })
// export class AllcustomerComponent implements OnInit {
//   customers: any[] = [];
//   newCustomer: any = {}; // Initialize new customer object

//   constructor(private customerService: CustomerService) {}

//   ngOnInit(): void {
//     this.loadAllCustomers();
//   }

//   loadAllCustomers(): void {
//     this.customerService.getAllCustomers().subscribe(
//       (data: any) => {
//         this.customers = data;
//       },
//       (error) => {
//         console.error('Error fetching customers', error);
//       }
//     );
//   }

//   createCustomer(customer: any): void {
//     this.customerService.createCustomer(customer).subscribe(
//       (response: any) => {
//         console.log('Customer created successfully', response);
//         this.loadAllCustomers(); // Refresh the customer list
//       },
//       (error) => {
//         console.error('Error creating customer', error);
//       }
//     );
//   }

//   updateCustomer(id: number, customer: any): void {
//     this.customerService.updateCustomer(id, customer).subscribe(
//       () => {
//         console.log('Customer updated successfully');
//         this.loadAllCustomers(); // Refresh the customer list
//       },
//       (error) => {
//         console.error('Error updating customer', error);
//       }
//     );
//   }

//   deleteCustomer(id: number): void {
//     this.customerService.deleteCustomer(id).subscribe(
//       () => {
//         console.log('Customer deleted successfully');
//         this.loadAllCustomers(); // Refresh the customer list
//       },
//       (error) => {
//         console.error('Error deleting customer', error);
//       }
//     );
//   }

//   searchCustomers(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     const search = input.value;
//     this.customerService.searchCustomers(search).subscribe(
//       (data: any) => {
//         this.customers = data;
//       },
//       (error) => {
//         console.error('Error searching customers', error);
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../Services/Customer/customer.service';

@Component({
  selector: 'app-allcustomer',
  templateUrl: './allcustomer.component.html',
  styleUrls: ['./allcustomer.component.css']
})
export class AllcustomerComponent implements OnInit {
  customers: any[] = [];
  newCustomer: any = {}; // Initialize new customer object

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadAllCustomers();
  }

  loadAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe(
      (data: any) => {
        this.customers = data.$values || []; // Safely extract $values
      },
      (error) => {
        console.error('Error fetching customers', error);
      }
    );
  }

  createCustomer(customer: any): void {
    this.customerService.createCustomer(customer).subscribe(
      (response: any) => {
        alert('Customer created successfully');
        this.loadAllCustomers(); // Refresh the customer list
      },
      (error) => {
        console.error('Error creating customer', error);
      }
    );
  }

  updateCustomer(id: number, customer: any): void {
    this.customerService.updateCustomer(id, customer).subscribe(
      () => {
        console.log('Customer updated successfully');
        this.loadAllCustomers(); // Refresh the customer list
      },
      (error) => {
        console.error('Error updating customer', error);
      }
    );
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(
      () => {
        console.log('Customer deleted successfully');
        this.loadAllCustomers(); // Refresh the customer list
      },
      (error) => {
        console.error('Error deleting customer', error);
      }
    );
  }

  searchCustomers(event: Event): void {
    const input = event.target as HTMLInputElement;
    const search = input.value;

    if (search.trim()) {
      this.customerService.searchCustomers(search).subscribe(
        (response: any) => {
          this.customers = response.$values || []; // Safely extract $values
        },
        (error) => {
          console.error('Error searching customers', error);
        }
      );
    } else {
      // If search is empty, load all customers
      this.loadAllCustomers();
    }
  }
}