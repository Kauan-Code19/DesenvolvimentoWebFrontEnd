import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'icon-edit-component',
  standalone: true,
  imports: [],
  templateUrl: './icon-edit.component.html',
  styleUrl: './icon-edit.component.scss'
})
export class IconEditComponent {
  @Output() editEvent = new EventEmitter();

  constructor() {}

  eventEdit() {
    this.editEvent.emit()
  }
}
