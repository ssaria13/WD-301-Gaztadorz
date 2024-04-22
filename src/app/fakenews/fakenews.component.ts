import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fakenews',
  templateUrl: './fakenews.component.html',
  styleUrls: ['./fakenews.component.css']
})
export class FakenewsComponent {
  constructor(private router: Router) { }

  // Function to navigate to the fakenews component
  navigateToFakenews() {
    this.router.navigate(['/fakenews']); // Navigate to the fakenews component
  }
}
