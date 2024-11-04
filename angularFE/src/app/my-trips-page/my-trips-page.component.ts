import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-trips-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-trips-page.component.html',
  styleUrls: ['./my-trips-page.component.css']
})
export class MyTripsPageComponent {
  bookingRef: string = '';
  email: string = '';

  // Dummy data for trips
  trips = [
    { flightNumber: 'AA123', date: '2024-11-10' },
    { flightNumber: 'BA456', date: '2024-12-15' },
    { flightNumber: 'DL789', date: '2025-01-20' }
  ];

  fetchTrips() {
    // Logic to fetch trips based on bookingRef and email
    // For now, we're just using the dummy data above
  }

  viewTripDetails(trip: { flightNumber: string; date: string }) {
    // Logic to view trip details
    console.log('Viewing details for trip:', trip);
  }
}
