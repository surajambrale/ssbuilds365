import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-enquiries',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './admin-enquiries.component.html',
  styleUrl: './admin-enquiries.component.scss'
})
export class AdminEnquiriesComponent implements OnInit {
  enquiries: any[] = [];
  selectedEntry: any = null;
  isLoading = false;
  isAuthorized = false;
  API_URL = 'https://siddhi-client.onrender.com/enquiries';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const password = prompt('Enter admin password:');
    if (password === 'admin123') {
      this.isAuthorized = true;
      this.loadEnquiries();
    } else {
      alert('Unauthorized access');
    }
  }

  loadEnquiries() {
  this.isLoading = true;
  this.http.get<any[]>(this.API_URL).subscribe({
    next: (data) => {
      console.log('Fetched Enquiries:', data);
      this.enquiries = data;
      this.isLoading = false;
    },
    error: (err) => {
      console.error('Error loading enquiries:', err);  // Log the full error
      this.isLoading = false;
    }
  });
}

  edit(entry: any) {
    this.selectedEntry = { ...entry };
  }

  save(form: NgForm) {
    if (!form.valid) return;

    this.http.put(`${this.API_URL}/${this.selectedEntry._id}`, this.selectedEntry).subscribe({
      next: () => {
        alert('Updated successfully!');
        this.loadEnquiries();
        this.selectedEntry = null;
      },
      error: (err) => console.error('Update failed:', err)
    });
  }

  delete(entry: any) {
    if (!confirm('Are you sure you want to delete this entry?')) return;

    this.http.delete(`${this.API_URL}/${entry._id}`).subscribe({
      next: () => {
        alert('Deleted successfully!');
        this.loadEnquiries();
      },
      error: (err) => console.error('Delete error:', err)
    });
  }

  cancelEdit() {
    this.selectedEntry = null;
  }
}
