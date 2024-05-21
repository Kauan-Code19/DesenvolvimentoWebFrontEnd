import { Component } from '@angular/core';
import { FormComponent } from '../../../shared/form-component/form-component.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'main-login-component',
  standalone: true,
  imports: [FormComponent, RouterModule],
  templateUrl: './main-login-component.component.html',
  styleUrl: './main-login-component.component.scss'
})
export class MainLoginComponent {

}
