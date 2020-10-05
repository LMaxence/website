import { Injectable } from '@angular/core';
import { projects } from '../fixtures/projects.fixtures';
import { Project } from '../models/project.model';

@Injectable()
export class ProjectService {
  getProjects(): Project[] {
    return projects;
  }

  getProject(id: string): Project | null {
    return projects.find(project => project.id === id);
  }
}
