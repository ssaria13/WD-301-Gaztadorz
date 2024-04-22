import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  constructor(private router: Router) { }

  // Function to navigate to the eventInfo component
  navigateToEventInfo() {
    this.router.navigate(['/history']); // Navigate to the fakenews component
  }
}
