import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectTagComponent } from './components/project-tag/project-tag.component';
import { ProjectLinkComponent } from './components/project-link/project-link.component';
import { MatIconModule } from '@angular/material/icon';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [ProjectCardComponent, ProjectTagComponent, ProjectLinkComponent, ProjectComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ProjectCardComponent, ProjectComponent]
})
export class ProjectsModule {}
