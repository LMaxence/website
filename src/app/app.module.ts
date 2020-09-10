import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexPageComponent } from "./pages/index/index-page.component";
import { AboutPageComponent } from "./pages/about/about-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ButtonComponent } from "./components/button/button.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { ProjectsPageComponent } from "./pages/projects/projects-page.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AboutPageComponent,
    NavbarComponent,
    ButtonComponent,
    ProjectsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
