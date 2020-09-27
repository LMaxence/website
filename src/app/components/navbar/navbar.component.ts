import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active = false;
  primary = false;
  logoType = 'original';
  scrolled = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateCurrentClasses(window.innerWidth, window.location.pathname);

    this.router.events.subscribe((event: RouterEvent) => {
      if (event.url) {
        this.updateCurrentClasses(window.innerWidth, event.url);
      }
    });
  }

  onResize() {
    this.updateCurrentClasses(window.innerWidth, window.location.pathname);
  }

  onScroll() {
    this.scrolled = window.scrollY > 0;
    this.updateCurrentClasses(window.innerWidth, window.location.pathname);
  }

  private updateCurrentClasses(width: number, path: string) {
    const paths = path.split('/');
    if (paths.includes('projects')) {
      this.primary = true;
      this.logoType = width > 800 && !this.scrolled ? 'white' : 'original';
    } else {
      this.primary = false;
      this.logoType = 'original';
    }
  }
}
