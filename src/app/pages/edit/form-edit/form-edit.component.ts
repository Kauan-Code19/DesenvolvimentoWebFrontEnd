import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../shared/button-component/button-component.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { parse } from 'querystring';

@Component({
  selector: 'form-edit-component',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  providers: [Router, UserService],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.scss'
})
export class FormEditComponent implements OnInit {
  inputsForm: FormGroup;
  userId: string = '';
  name: string = '';
  email: string = '';

  constructor
  (
    private router: Router,
    private userService: UserService, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) 
  {
    this.inputsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id')
    if (idParam !== null) {
      this.userId = idParam;

      this.userService.getUser(this.userId).subscribe({
        next: (response) => {
          this.name = response.name;
          this.email = response.email;

          this.inputsForm = this.formBuilder.group({
            name: [this.name],
            email: [this.email],
            password: ['']
          })
        }
      })
    }
  }

  submit() {
    if (this.inputsForm.valid) {

      this.userService.updateUser
      (
        this.userId,
        this.inputsForm.value.name, 
        this.inputsForm.value.email, 
        this.inputsForm.value.password
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
