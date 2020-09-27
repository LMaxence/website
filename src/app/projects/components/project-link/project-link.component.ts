import { Component, Input } from '@angular/core';
import { Link } from '../../models/link.model';

@Component({
  selector: 'app-project-link',
  templateUrl: './project-link.component.html',
  styleUrls: ['./project-link.component.scss']
})
export class ProjectLinkComponent {
  @Input() link: Link;
}
