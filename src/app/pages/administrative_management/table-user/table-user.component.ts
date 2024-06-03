import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { UserResponse } from '../../../../interfaces/user/user-response';
import { CommonModule } from '@angular/common';
import { IconDeleteComponent } from '../icon-delete/icon-delete.component';
import { IconEditComponent } from '../icon-edit/icon-edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'table-user-component',
  standalone: true,
  imports: [CommonModule, IconDeleteComponent, IconEditComponent],
  providers: [UserService, Router],
  templateUrl: './table-user.component.html',
  styleUrl: './table-user.component.scss'
})
export class TableUserComponent implements OnInit {
  users: UserResponse[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response;
      }
    })
  }

  pageEdit(userId: string) {
    this.router.navigate(['edit', userId])
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.ngOnInit()
      }
    })
  }
}
