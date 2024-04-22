import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  dots1Visible = false;
  dots2Visible = false;
  dots3Visible = false;
  dots4Visible = false;

  // Toggle function to show/hide "Read more" content
  toggleText(section: number) {
    if (section === 1) {
      this.dots1Visible = !this.dots1Visible;
    } else if (section === 2) {
      this.dots2Visible = !this.dots2Visible;
    } else if (section === 3) {
      this.dots3Visible = !this.dots3Visible;
    } else if (section == 4){
      this.dots4Visible = !this.dots4Visible;
    }

 
  } 
}
