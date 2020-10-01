import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index/index-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ProjectsModule } from './projects/projects.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, IndexPageComponent, AboutPageComponent, NavbarComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatIconModule, ProjectsModule, HttpClientModule],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
