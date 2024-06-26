import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'button-send-data-user-component',
  standalone: true,
  imports: [CommonModule],
  providers: [Router],
  templateUrl: './button-component.component.html',
  styleUrl: './button-component.component.scss'
})
export class ButtonComponent {
  constructor(private router: Router) {}

  @Output("submitForm") onSubmit = new EventEmitter();
  @Input() disabled: boolean = false;
  @Input("btn-text") btnText: string = ""

  submit() {
    this.onSubmit.emit();
  }

  isLoginPage() : boolean {
    return this.router.url === '/login';
  }

  isRegisterPage() : boolean {
    return this.router.url === '/register'
  }
}
