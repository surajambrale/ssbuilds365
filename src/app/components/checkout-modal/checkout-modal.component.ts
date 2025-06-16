import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout-modal.component.html',
  styleUrl: './checkout-modal.component.scss',
})
export class CheckoutModalComponent {
  @Input() planName = '';
  @Output() close = new EventEmitter<void>();

  formData = {
    name: '',
    email: '',
    phone: '',
    plan: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.formData.plan = this.planName;
    this.http.post('http://localhost:3000/checkout', this.formData).subscribe({
      next: (res) => {
        alert('Submitted successfully!');
        this.close.emit();
      },
      error: (err) => console.error('Submission failed:', err)
    });
  }
}
