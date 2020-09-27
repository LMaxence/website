import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() animate = false;
  @Output() clicked: EventEmitter<void> = new EventEmitter();
  @Input() color = 'primary';
}
