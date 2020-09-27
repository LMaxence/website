import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/projects/fixtures/projects.fixtures';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  projects = projects;

  constructor() {}

  ngOnInit(): void {}
}
