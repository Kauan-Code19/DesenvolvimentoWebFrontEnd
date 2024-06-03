import { Routes } from '@angular/router';
import { MainLoginComponent } from './pages/login/main-login-component/main-login-component.component';

export const routes: Routes = [
    { path: 'login', component: MainLoginComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' }
];
