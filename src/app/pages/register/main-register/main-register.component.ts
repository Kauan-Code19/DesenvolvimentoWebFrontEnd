import { Component } from '@angular/core';
import { FormComponentRegister } from '../form-component-register/form-component-register.component';

@Component({
  selector: 'main-register-component',
  standalone: true,
  imports: [FormComponentRegister],
  templateUrl: './main-register.component.html',
  styleUrl: './main-register.component.scss'
})
export class MainRegisterComponent {

}
