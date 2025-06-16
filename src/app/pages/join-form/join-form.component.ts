import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-join-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-form.component.html',
  styleUrl: './join-form.component.scss'
})
export class JoinFormComponent implements OnInit {
  @Output() onClose = new EventEmitter<void>();

  formData = {
    name: '',
    phone: '',
    course: '',
    message: ''
  };

  submittedForms: any[] = [];
  editId: string | null = null;
  isSubmitting = false;

  courses = ['Suspension Training', 'Foam Roller', 'Resistance Band', 'Kettle Bell', 'Nutrition', 'Personal Trainer', 'Special Population'];
  private API_URL = 'https://siddhi-client.onrender.com/enquiries';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSubmissions();
  }

  loadSubmissions() {
    this.http.get<any[]>(this.API_URL).subscribe({
      next: (data) => this.submittedForms = data,
      error: (err) => console.error('Error loading submissions:', err)
    });
  }

  submitForm(form: NgForm) {
    if (form.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    this.isSubmitting = true;

    if (this.editId) {
      // UPDATE existing entry
      this.http.put(`${this.API_URL}/${this.editId}`, this.formData).subscribe({
        next: () => {
          alert('Form updated successfully!');
          this.loadSubmissions(); // Refresh list
          this.resetForm();
        },
        error: (err) => {
          console.error('Update error:', err);
          this.isSubmitting = false;
        }
      });
    } else {
      // CREATE new entry
      this.http.post(this.API_URL, this.formData).subscribe({
        next: () => {
          alert('Form submitted successfully!');
          this.loadSubmissions(); // Refresh list
          this.resetForm();
        },
        error: (error) => {
          alert('Error occurred!');
          this.isSubmitting = false;
          console.error(error);
        }
      });
    }
  }

  editForm(entry: any) {
    this.formData = {
      name: entry.name,
      phone: entry.phone,
      course: entry.course,
      message: entry.message
    };
    this.editId = entry._id || entry.id;
  }

  deleteForm(entry: any) {
    const id = entry._id || entry.id;
    if (!id) {
      alert('Invalid entry ID.');
      return;
    }

    if (confirm('Are you sure you want to delete this entry?')) {
      this.http.delete(`${this.API_URL}/${id}`).subscribe({
        next: () => {
          alert('Entry deleted successfully!');
          this.loadSubmissions();
          if (this.editId === id) this.resetForm();
        },
        error: (err) => {
          console.error('Delete error:', err);
        }
      });
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      phone: '',
      course: '',
      message: ''
    };
    this.editId = null;
    this.isSubmitting = false;
  }

  close() {
    this.resetForm();
    this.onClose.emit();
  }
}
