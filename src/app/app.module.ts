import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexPageComponent } from "./pages/index/index-page.component";
import { AboutPageComponent } from "./pages/about/about-page.component";

@NgModule({
  declarations: [AppComponent, IndexPageComponent, AboutPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
