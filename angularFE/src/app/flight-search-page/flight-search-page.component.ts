import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlightModalComponent } from '../components/flight-modal/flight-modal.component';

@Component({
  selector: 'app-flight-search-page',
  standalone: true,
  imports: [FormsModule, CommonModule, FlightModalComponent],
  templateUrl: './flight-search-page.component.html',
  styleUrls: ['./flight-search-page.component.css'],
})
export class FlightSearchPageComponent {
  showModal = false;
  selectedFlight: any;

  departureCity: string = '';
  arrivalCity: string = '';
  travelDate: string = '';
  passengers: number = 1;
  flights: any[] = [];
  allFlights: any[] = [
    {
      flightNumber: 'AA101',
      departureTime: '08:00 AM',
      arrivalTime: '11:00 AM',
      duration: '1h',
      price: 250,
      origin: 'New York',
      destination: 'Los Angeles',
      totalCapacity: 180,
      bookedSeats: 100,
    },
    {
      flightNumber: 'UA202',
      departureTime: '10:00 AM',
      arrivalTime: '01:30 PM',
      duration: '2h 30m',
      price: 320,
      origin: 'Chicago',
      destination: 'Miami',
      totalCapacity: 150,
      bookedSeats: 120,
    },
    {
      flightNumber: 'DL303',
      departureTime: '12:00 PM',
      arrivalTime: '04:00 PM',
      duration: '5h',
      price: 280,
      origin: 'San Francisco',
      destination: 'Houston',
      totalCapacity: 190,
      bookedSeats: 10,
    },
    {
      flightNumber: 'SW404',
      departureTime: '02:00 PM',
      arrivalTime: '06:00 PM',
      duration: '10h',
      price: 300,
      origin: 'Dallas',
      destination: 'Seattle',
      totalCapacity: 480,
      bookedSeats: 230,
    },
    {
      flightNumber: 'SW405',
      departureTime: '02:00 PM',
      arrivalTime: '06:00 PM',
      duration: '10h',
      price: 300,
      origin: 'Dallas',
      destination: 'Seattle',
      totalCapacity: 480,
      bookedSeats: 230,
    },
    {
      flightNumber: 'SW406',
      departureTime: '02:00 PM',
      arrivalTime: '06:00 PM',
      duration: '10h',
      price: 300,
      origin: 'Dallas',
      destination: 'Seattle',
      totalCapacity: 480,
      bookedSeats: 230,
    },
  ];

  sortBy: string = 'price';
  sortOrder: string = 'asc';
  priceFilter: number | null = null;

  constructor() {
    this.viewAllFlights();
  }

  // Search function to filter flights based on user input
  searchFlights() {
    this.flights = this.allFlights.filter((flight) => {
      const availableCapacity = flight.totalCapacity - flight.bookedSeats;

      return (
        flight.origin
          .toLowerCase()
          .includes(this.departureCity.toLowerCase()) &&
        flight.destination
          .toLowerCase()
          .includes(this.arrivalCity.toLowerCase()) &&
        availableCapacity >= this.passengers // Check if available capacity is sufficient
      );
    });

    // Apply additional filters if priceFilter is set
    const maxPrice = this.priceFilter ?? Infinity; // Fallback to Infinity if null
    this.flights = this.flights.filter((flight) => flight.price <= maxPrice);

    // Sort the flights
    this.sortFlights();
  }

  // Function to show all flights
  viewAllFlights() {
    this.flights = this.allFlights;
  }

  // Method to handle flight selection
  bookFlight(flight: any) {
    console.log('Flight selected:', flight);
    this.selectedFlight = flight;
    this.showModal = true;
  }

  // Function to sort flights based on selected criteria
  sortFlights() {
    this.flights.sort((a, b) => {
      let comparison = 0;

      if (this.sortBy === 'price') {
        comparison = a.price - b.price;
      } else if (this.sortBy === 'departureTime') {
        comparison =
          new Date(`1970-01-01T${a.departureTime}`).getTime() -
          new Date(`1970-01-01T${b.departureTime}`).getTime();
      } else if (this.sortBy === 'arrivalTime') {
        comparison =
          new Date(`1970-01-01T${a.arrivalTime}`).getTime() -
          new Date(`1970-01-01T${b.arrivalTime}`).getTime();
      }

      return this.sortOrder === 'asc' ? comparison : -comparison;
    });
  }
  resetSearch() {
    this.departureCity = '';
    this.arrivalCity = '';
    this.travelDate = '';
    this.passengers = 1; // Reset to default value
    this.priceFilter = null; // Reset filter
    this.sortBy = 'price'; // Reset sort
    this.sortOrder = 'asc'; // Reset order
    this.flights = []; // Clear available flights
  }

  resetFilters() {
    this.priceFilter = null; // Reset price filter
    this.sortBy = 'price'; // Reset sort
    this.sortOrder = 'asc'; // Reset order
    this.searchFlights(); // Re-fetch flights based on updated filters
  }

  viewFlightDetails(flight: any) {
    console.log('Flight selected:', flight);
    this.selectedFlight = flight;
    this.showModal = true;
  }
}
