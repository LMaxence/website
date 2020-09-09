import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() animate: boolean = false;
  @Output() click: EventEmitter<void> = new EventEmitter();
  @Input() color: string = "primary";
  constructor() {}
}
