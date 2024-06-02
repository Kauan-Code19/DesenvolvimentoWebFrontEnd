import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { TableUserComponent } from '../table-user/table-user.component';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-main-administrative-management',
  standalone: true,
  imports: [NavigationBarComponent, TableUserComponent],
  templateUrl: './main-administrative-management.component.html',
  styleUrl: './main-administrative-management.component.scss'
})
export class MainAdministrativeManagementComponent {
  constructor(private userSErvice: UserService) {}
}
