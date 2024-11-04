import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-passenger-information-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './passenger-information-page.component.html',
  styleUrls: ['./passenger-information-page.component.css']
})
export class PassengerInformationPageComponent {
  // Initial values for passenger information
  name: string = 'Satish Maharaj';
  dob: string = '2001-05-22';  // Ensure the date format is 'YYYY-MM-DD'
  gender: string = 'Male';
  email: string = 'satishlawrencemaharaj@gmail.com';
  phone: string = '8687095963';

  isEditing: boolean = false;

  submitPassengerInfo() {
    // Handle the form submission logic here
    const passengerInfo = {
      name: this.name,
      dob: this.dob,
      gender: this.gender,
      email: this.email,
      phone: this.phone
    };

    console.log('Passenger Information Submitted:', passengerInfo);
    // You can add additional logic here, like saving the data or navigating to another page
  }

  enableEditing() {
    this.isEditing = true;
  }
}
