import { Component } from '@angular/core';
import { FormLoginComponent } from '../form-component-login/form-component-login.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'main-login-component',
  standalone: true,
  imports: [FormLoginComponent, RouterModule],
  templateUrl: './main-login-component.component.html',
  styleUrl: './main-login-component.component.scss'
})
export class MainLoginComponent {

}
