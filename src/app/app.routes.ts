import { Routes } from '@angular/router';
import { MainLoginComponent } from './pages/login/main-login-component/main-login-component.component';
import { MainRegisterComponent } from './pages/register/main-register/main-register.component';
import { MainAdministrativeManagementComponent } from './pages/administrative_management/main-administrative-management/main-administrative-management.component';

export const routes: Routes = [
    { path: 'login', component: MainLoginComponent },
    { path: 'register', component: MainRegisterComponent },
    { path: 'administrative-management', component: MainAdministrativeManagementComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' }
];
