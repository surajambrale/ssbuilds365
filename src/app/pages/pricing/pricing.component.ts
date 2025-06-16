import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CheckoutModalComponent } from '../../components/checkout-modal/checkout-modal.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, CheckoutModalComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  isModalOpen = signal(false);
  selectedPlan = signal('');

  openModal(plan: string) {
    this.selectedPlan.set(plan);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.selectedPlan.set('');
  }
}
