import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../shared/button-component/button-component.component';
import { LoginService } from '../../../../services/login-service.service';

@Component({
  selector: 'form-component',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  providers: [Router, LoginService],
  templateUrl: './form-component-login.component.html',
  styleUrl: './form-component-login.component.scss'
})
export class FormLoginComponent {
  inputsForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService) {
    this.inputsForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  submit() {
    if (this.inputsForm.valid) {
      
      this.loginService.loginUser
      (this.inputsForm.value.login, this.inputsForm.value.password).subscribe({
        next: () => {
          this.router.navigateByUrl('/administrative-management')
          console.log("ok");
          
        },

        error: () => {
          console.error("dados inválidos");
        }
      })
    }
  }
}
