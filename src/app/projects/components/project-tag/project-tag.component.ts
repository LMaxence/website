import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-project-tag',
  templateUrl: './project-tag.component.html',
  styleUrls: ['./project-tag.component.scss'],
})
export class ProjectTagComponent implements OnInit {
  @Input() tag: Tag;

  defaultColors = ['primary', 'secondary', 'white'];

  constructor() {}

  ngOnInit(): void {}
}
