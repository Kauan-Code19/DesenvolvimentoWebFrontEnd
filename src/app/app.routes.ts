import { Routes } from '@angular/router';
import { MainLoginComponent } from './pages/login/main-login-component/main-login-component.component';
import { MainRegisterComponent } from './pages/register/main-register/main-register.component';

export const routes: Routes = [
    { path: 'login', component: MainLoginComponent },
    { path: 'register', component: MainRegisterComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' }
];
