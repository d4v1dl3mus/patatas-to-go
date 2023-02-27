import { Subscriber } from './../../shared/models/subscriber.model';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss'],
})
export class SubscribersComponent {
  subscribers: Subscriber[] = [];
  allSubscribers: number = 0;
  pagination: number = 1;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.fetchSubscribers();
  }

  fetchSubscribers() {
    this.dataService.getSubscribers(this.pagination).subscribe((data: any) => {
      this.subscribers = data.Data;
      this.allSubscribers = data.Count;
    });
  }

  renderPage(event: number) {
    this.pagination = event;
    this.fetchSubscribers();
  }

  onDelete(id: number) {
    this.dataService.deleteSubscriber(id).subscribe(
      (response) => {
      this.fetchSubscribers();
      },
      (error) => {
        console.error(error.error.error);
      }
    );
  }
}
