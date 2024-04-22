import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-humanrights',
  templateUrl: './humanrights.component.html',
  styleUrls: ['./humanrights.component.css']
})
export class HumanrightsComponent {
  constructor(private router: Router) { }

  // Function to navigate to the eventInfo component
  navigateToEventInfo() {
    this.router.navigate(['/humanrights']); // Navigate to the fakenews component
  }
}
