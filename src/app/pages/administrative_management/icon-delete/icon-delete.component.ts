import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'icon-delete-component',
  standalone: true,
  imports: [],
  templateUrl: './icon-delete.component.html',
  styleUrl: './icon-delete.component.scss'
})
export class IconDeleteComponent {
  @Output() deleteEvent = new EventEmitter();

  constructor() {}

  eventDelete() {
    this.deleteEvent.emit();
  }
}
