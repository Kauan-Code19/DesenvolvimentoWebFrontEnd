import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { ButtonComponent } from '../../../shared/button-component/button-component.component';

@Component({
  selector: 'form-component-register',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  providers: [Router, UserService],
  templateUrl: './form-component-register.component.html',
  styleUrl: './form-component-register.component.scss'
})
export class FormComponentRegister {
  inputsForm: FormGroup;

  constructor(private router: Router, private userService: UserService) {
    this.inputsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit() {
    if (this.inputsForm.valid) {
      
      this.userService.createUser
      (
        this.inputsForm.value.name, this.inputsForm.value.email, this.inputsForm.value.password
      )
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/administrative-management')
        },

        error: () => [
          console.error("dados invalidos")
        ]
      })
    }
  }
}
