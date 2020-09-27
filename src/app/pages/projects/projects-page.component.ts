import { Component } from '@angular/core';
import { projects } from 'src/app/projects/fixtures/projects.fixtures';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  projects = projects;
}
