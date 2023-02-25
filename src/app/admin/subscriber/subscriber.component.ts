import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss'],
})
export class SubscriberComponent {
  subscriber: any = [];
  id:any = 0

  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.id = this.router.url.split('/')[3]
    this.fetchSubscriber();
  }

  fetchSubscriber() {
    this.dataService.getSubscriber(this.id).subscribe((data: any) => {
      this.subscriber = data.Data;
    });
  }
}
