import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/projects/models/project.model';
import { ProjectService } from 'src/app/projects/services/project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  constructor(private projectService: ProjectService, private route: ActivatedRoute) {}
  project: Project | null;
  notFound = false;

  ngOnInit() {
    const projectId: string = this.route.snapshot.params['projectId'];
    const project = this.projectService.getProject(projectId);
    if (!project) {
      this.notFound = true;
    } else {
      this.project = project;
    }
  }
}
