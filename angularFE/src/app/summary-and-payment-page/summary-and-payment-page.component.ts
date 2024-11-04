import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Payment {
  id: number;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  status: 'Paid' | 'Unpaid';
}


@Component({
  selector: 'app-summary-and-payment-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './summary-and-payment-page.component.html',
  styleUrls: ['./summary-and-payment-page.component.css']
})
export class SummaryAndPaymentPageComponent {
  payments: Payment[] = [
    { id: 4, flightNumber: 'ABC13', departureTime: '2024-11-01 10:00 AM', arrivalTime: '2024-11-01 1:00 PM', price: 199.99, status: 'Unpaid' },
    { id: 3, flightNumber: 'ABC1243', departureTime: '2024-11-01 10:00 AM', arrivalTime: '2024-11-01 1:00 PM', price: 199.99, status: 'Unpaid' },
    { id: 2, flightNumber: 'ABC12221', departureTime: '2024-11-02 1:00 AM', arrivalTime: '2024-11-02 3:00 PM', price: 99.99, status: 'Paid' },
    { id: 1, flightNumber: 'ABC1212', departureTime: '2024-11-03 4:00 AM', arrivalTime: '2024-11-03 4:00 PM', price: 9.99, status: 'Paid' }
  ];

  paidPayments: Payment[] = [];
  unpaidPayments: Payment[] = [];
  selectedFlight: Payment | null = null;
  cardNumber: string = '';
  expDate: string = '';
  cvv: string = '';

  constructor(private router: Router) {
    this.categorizePayments();
    this.selectedFlight = this.getMostRecentUnpaidFlight();
  }

  categorizePayments() {
    this.paidPayments = this.payments.filter(payment => payment.status === 'Paid');
    this.unpaidPayments = this.payments.filter(payment => payment.status === 'Unpaid');
  }

  getMostRecentUnpaidFlight(): Payment | null {
    return this.unpaidPayments.sort((a, b) => b.id - a.id)[0] || null;
  }

  selectPaidFlight(){
    this.router.navigate(['/success']);
  }

  makePayment() {
    if (this.selectedFlight) {  // Check if selectedFlight is not null
      console.log('Processing payment with:', {
        cardNumber: this.cardNumber,
        expDate: this.expDate,
        cvv: this.cvv,
        flight: this.selectedFlight
      });

      // Mark the selected flight as 'Paid' after payment processing
      const flightToMarkPaid = this.payments.find(payment => payment.id === this.selectedFlight?.id);
      if (flightToMarkPaid) {
        flightToMarkPaid.status = 'Paid';
      }

      // Re-categorize payments and select the next unpaid flight if available
      this.categorizePayments();
      this.selectedFlight = this.getMostRecentUnpaidFlight();

      // Clear input fields after payment
      this.cardNumber = '';
      this.expDate = '';
      this.cvv = '';
    }
  }
}
