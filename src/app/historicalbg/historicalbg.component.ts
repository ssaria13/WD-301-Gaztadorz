import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historicalbg',
  templateUrl: './historicalbg.component.html',
  styleUrls: ['./historicalbg.component.css']
})
export class HistoricalbgComponent {
  constructor(private router: Router) { }

  // Function to navigate to the eventInfo component
  navigateToEventInfo() {
    this.router.navigate(['/historicalbg']); // Navigate to the fakenews component
  }
}
