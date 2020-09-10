import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { icons } from "./icons";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    icons.forEach((icon) => {
      matIconRegistry.addSvgIcon(
        icon.name,
        domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
