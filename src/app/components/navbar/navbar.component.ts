import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active = false;
  scrolled = false;
  alternative = false;

  constructor(private router: Router) {}

  onScroll() {
    const scroll = window.scrollY;
    this.scrolled = scroll > 0;
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event.url) {
        this.alternative = event.url.split('/').includes('project');
      }
    });
  }
}
