import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterEvent } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  active = false;
  primary = false;
  logoType = "original";

  constructor(private router: Router) {}

  ngOnInit() {
    const paths = window.location.pathname.split("/");
    this.updateCurrentClasses(window.innerWidth, window.location.pathname);

    this.router.events.subscribe((event: RouterEvent) => {
      if (event.url) {
        this.updateCurrentClasses(window.innerWidth, event.url);
      }
    });
  }

  onResize($event) {
    this.updateCurrentClasses(window.innerWidth, window.location.pathname);
  }

  private updateCurrentClasses(width: number, path: string) {
    const paths = path.split("/");
    if (paths.includes("projects")) {
      this.primary = true;
      this.logoType = width > 800 ? "white" : "original";
    } else {
      this.primary = false;
      this.logoType = "original";
    }
  }
}
