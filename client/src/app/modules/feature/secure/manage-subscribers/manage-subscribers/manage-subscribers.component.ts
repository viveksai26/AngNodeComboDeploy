import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'client/src/app/modules/core/services/notification.service';
import { NewsletterService } from 'client/src/app/modules/shared/services/newsletter/newsletter.service';

@Component({
  selector: 'app-manage-subscribers',
  templateUrl: './manage-subscribers.component.html',
  styleUrls: ['./manage-subscribers.component.css']
})
export class ManageSubscribersComponent implements OnInit {
  subscribersData: Object;
  constructor(private newsletterService: NewsletterService, private notificationService: NotificationService) {}

  ngOnInit(): void {}
  getSubscribers() {
    this.newsletterService.getSubscribers().subscribe((data) => (this.subscribersData = data));
  }
  clearSubscribers() {
    this.newsletterService.clearSubscribers().subscribe((data) => this.notificationService.openSnackBar(data, 'close'));
  }
  sendNewsLetter() {
    this.newsletterService
      .sendNewsletter()
      .subscribe((data) => this.notificationService.openSnackBar(data['message'], 'close'));
  }
}
