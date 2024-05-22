import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button-component/button-component.component';

@Component({
  selector: 'form-component',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  providers: [Router],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})
export class FormComponent {
  inputsForm: FormGroup;

  constructor(private router: Router) {
    this.inputsForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',
       [Validators.required, 
        Validators.minLength(8), 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$')]),
    });
  }

  submit() {
    if (this.inputsForm.valid) {
      
      // this.service.sendDataLogin(this.inputsForm.value.login, this.inputsForm.value.password).subscribe({
      //   next: (response) => {
      //     const userId = response.id;

      //     this.router.navigate(['user', userId]);
      //   }
      // })
    }
  }
}
