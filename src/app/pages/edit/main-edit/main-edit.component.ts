import { Component } from '@angular/core';
import { FormEditComponent } from '../form-edit/form-edit.component';

@Component({
  selector: 'app-main-edit',
  standalone: true,
  imports: [FormEditComponent],
  templateUrl: './main-edit.component.html',
  styleUrl: './main-edit.component.scss'
})
export class MainEditComponent {

}
