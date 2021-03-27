import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NewsletterService } from './modules/shared/services/newsletter/newsletter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  VAPID_PUBLIC_KEY = 'BP6E5pOfRrr7dqhpgV8auSJ3pwu6qDIUXm4txhoz5vck8KPqJB0drawCDBY5F4Z0Zipp6vf85iN3J62dG_6XiuY';
  constructor(private swPush: SwPush, private newsletterService: NewsletterService) {}
  ngOnInit() {
    this.subscribeToNotifications();
  }
  subscribeToNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then((sub) => this.newsletterService.addPushSubscriber(sub))
      .catch((err) => console.error('Could not subscribe to notifications', err));
  }
}
