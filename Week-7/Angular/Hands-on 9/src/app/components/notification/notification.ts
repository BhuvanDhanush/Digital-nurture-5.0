import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class Notification {

  constructor(
    public notificationService: NotificationService
  ) {}

  // Component-level providers create
  // a new NotificationService instance
  // for this component and its children.

}
