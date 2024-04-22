import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutpres',
  templateUrl: './aboutpres.component.html',
  styleUrls: ['./aboutpres.component.css']
})
export class AboutpresComponent {
  constructor(private router: Router) { }

  // Function to navigate to the eventInfo component
  navigateToEventInfo() {
    this.router.navigate(['/aboutpres']); // Navigate to the fakenews component
  }
}
