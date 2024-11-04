import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {
  // Test booking data
  bookings = [
    { id: 1, date: '2023-11-01', seat: 'Seat 5', flight: 'Flight 101', details: 'Booked on 2023-11-01' },
    { id: 2, date: '2023-11-02', seat: 'Seat 12', flight: 'Flight 102', details: 'Booked on 2023-11-02' },
    { id: 3, date: '2023-11-03', seat: 'Seat 20', flight: 'Flight 103', details: 'Booked on 2023-11-03' }
  ];

  // Variable to hold the selected booking details
  selectedBooking: any = null;
  sortOrder: 'asc' | 'desc' = 'asc';

  // Method to select and display booking details
  selectBooking(booking: any) {
    this.selectedBooking = booking;
  }
  sortBookings() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.bookings.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return this.sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
  }
}
