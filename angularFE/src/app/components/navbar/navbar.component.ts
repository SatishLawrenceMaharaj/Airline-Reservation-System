import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // Include CommonModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Fix typo from styleUrl to styleUrls
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log('clicked');
  }
}
