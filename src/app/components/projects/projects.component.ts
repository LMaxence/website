import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/projects/fixtures/projects.fixtures';
import { Project } from 'src/app/projects/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  ngOnInit() {
    this.projects = projects;
  }
}
