import { Routes } from '@angular/router';
import { MainLoginComponent } from './pages/login/main-login-component/main-login-component.component';
import { MainRegisterComponent } from './pages/register/main-register/main-register.component';
import { MainAdministrativeManagementComponent } from './pages/administrative_management/main-administrative-management/main-administrative-management.component';
import { MainEditComponent } from './pages/edit/main-edit/main-edit.component';

export const routes: Routes = [
    { path: 'login', component: MainLoginComponent },
    { path: 'register', component: MainRegisterComponent },
    { path: 'edit/:id', component: MainEditComponent },
    { path: 'administrative-management', component: MainAdministrativeManagementComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' }
];
