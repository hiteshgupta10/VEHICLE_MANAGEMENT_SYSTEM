import { Component, OnInit } from '@angular/core';

interface ServiceAdvisor {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-crudserviceadvisor',
  templateUrl: './crudserviceadvisor.component.html',
  styleUrls: ['./crudserviceadvisor.component.css']
})
export class CrudserviceadvisorComponent implements OnInit {
  serviceAdvisors: ServiceAdvisor[] = []; // List of service advisors
  currentServiceAdvisor: ServiceAdvisor = { name: '', email: '', phone: '' };
  isEditMode = false;

  constructor() {}

  ngOnInit() {
    this.loadServiceAdvisors();
  }

  // Load service advisors (you can replace this with a service call)
  loadServiceAdvisors() {
    // Replace with actual data fetching logic
    this.serviceAdvisors = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
      // Add more mock data as needed
    ];
  }

  // Add or update a service advisor
  onSubmit() {
    if (this.isEditMode) {
      // Update existing advisor
      this.serviceAdvisors = this.serviceAdvisors.map(advisor =>
        advisor.id === this.currentServiceAdvisor.id ? this.currentServiceAdvisor : advisor
      );
    } else {
      // Add new advisor
      this.currentServiceAdvisor.id = new Date().getTime(); // Mock ID, replace with actual ID from backend
      this.serviceAdvisors.push(this.currentServiceAdvisor);
    }

    this.clearForm();
  }

  // Edit a service advisor
  editServiceAdvisor(advisor: ServiceAdvisor) {
    this.currentServiceAdvisor = { ...advisor };
    this.isEditMode = true;
  }

  // Delete a service advisor
  deleteServiceAdvisor(advisor: ServiceAdvisor) {
    this.serviceAdvisors = this.serviceAdvisors.filter(a => a.id !== advisor.id);
  }

  // Clear form
  clearForm() {
    this.currentServiceAdvisor = { name: '', email: '', phone: '' };
    this.isEditMode = false;
  }
}
