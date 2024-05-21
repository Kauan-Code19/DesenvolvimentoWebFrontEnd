import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLoginComponent } from './pages/login/main-login-component/main-login-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DesenvolvimentoWeb';
}
