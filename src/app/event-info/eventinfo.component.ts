import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-info',
  templateUrl: './eventinfo.component.html',
  styleUrls: ['./eventinfo.component.css']
})
export class EventInfoComponent {
  constructor(private router: Router) { }

  // Function to navigate to the eventInfo component
  navigateToEventInfo() {
    this.router.navigate(['/eventinfo']); // Navigate to the fakenews component
  }
}

