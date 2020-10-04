import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  startDate: Date;
  endDate?: Date;

  ngOnInit() {
    this.startDate = new Date(this.project.startDate);
    this.endDate = this.project.endDate && new Date(this.project.endDate);
  }
}
