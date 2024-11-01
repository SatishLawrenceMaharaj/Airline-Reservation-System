import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-search-page',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Import FormsModule here
  templateUrl: './flight-search-page.component.html',
  styleUrls: ['./flight-search-page.component.css'],
})
export class FlightSearchPageComponent {
  departureCity: string = '';
  arrivalCity: string = '';
  travelDate: string = '';
  passengers: number = 1;
  flights: any[] = []; // Example flight data; this could be populated by a search function.

  searchFlights() {
    // Implement search functionality here, setting `this.flights` to the search results
  }

  selectFlight(flight: any) {
    console.log('Flight selected:', flight);
    // Add booking logic here (e.g., navigate to a booking page or display booking details)
  }
}
