// import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-flight-modal',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './flight-modal.component.html',
//   styleUrls: ['./flight-modal.component.css']
// })
// export class FlightModalComponent implements OnChanges {
//   @Input() selectedFlight: any;
//   showSeatModal: boolean = false; // Control the visibility of the seat modal
//   slideOut: boolean = false; // Control the slide-out animation

//   ngOnChanges(changes: SimpleChanges) {
//     if (changes['selectedFlight']) {
//       console.log('selectedFlight changed:', this.selectedFlight);
//     }
//   }

//   closeModal() {
//     this.selectedFlight = null; // Optionally, clear the selected flight data
//   }

//   bookFlight(flight: any) {
//     this.slideOut = true; // Trigger the slide-out animation
//     setTimeout(() => {
//       this.showSeatModal = true; // Show the seat modal after the slide-out
//     }, 300); // Duration of the slide-out animation
//   }

//   closeSeatModal() {
//     this.showSeatModal = false; // Close the seat selection modal
//   }


// }


import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-modal.component.html',
  styleUrls: ['./flight-modal.component.css']
})
export class FlightModalComponent implements OnChanges {
  @Input() selectedFlight: any;
  showSeatModal: boolean = false; // Control the visibility of the seat modal
  slideOut: boolean = false; // Control the slide-out animation

  // Seat management properties
  selectedSeat: any = null; // Selected seat details
  seatMap: any[] = []; // Array to hold seat details

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedFlight']) {
      console.log('selectedFlight changed:', this.selectedFlight);
      this.generateSeatMap(); // Generate seat map when flight changes
    }
  }

  closeModal() {
    this.selectedFlight = null; // Optionally, clear the selected flight data
  }

  bookFlight(flight: any) {
    this.slideOut = true; // Trigger the slide-out animation
    setTimeout(() => {
      this.showSeatModal = true; // Show the seat modal after the slide-out
    }, 300); // Duration of the slide-out animation
  }

  generateSeatMap() {
    const availableSeats = this.selectedFlight.totalCapacity - this.selectedFlight.bookedSeats;
    this.seatMap = [];

    for (let i = 1; i <= this.selectedFlight.totalCapacity; i++) {
      this.seatMap.push({
        number: `Seat ${i}`,
        available: i > this.selectedFlight.bookedSeats, // Assuming seats are numbered from 1 to total capacity
        selected: false
      });
    }
  }

  selectSeat(seat: any) {
    if (seat.available) {
      // Deselect previously selected seat if any
      if (this.selectedSeat) {
        this.selectedSeat.selected = false;
      }
      // Mark the new seat as selected
      seat.selected = true;
      this.selectedSeat = seat;
    }
  }

  confirmSeat() {
    if (this.selectedSeat) {
      console.log(`Seat booked: ${this.selectedSeat.number}`);
      this.closeSeatModal(); // Close the modal after confirming
      this.router.navigate(['/summary-payment']);
    }
  }

  closeSeatModal() {
    this.showSeatModal = false; // Close the seat selection modal
    this.selectedSeat = null; // Reset the selected seat
  }
}
