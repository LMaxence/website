import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  active = false;
  scrolled = false;

  onScroll() {
    const scroll = window.scrollY;
    this.scrolled = scroll > 0;
  }
}
