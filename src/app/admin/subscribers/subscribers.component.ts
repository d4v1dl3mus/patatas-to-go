import { Subscriber } from './../../shared/models/subscriber.model';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss'],
})
export class SubscribersComponent {

  subscribers: Subscriber[] = []
  allSubscribers: number = 0;
  pagination: number = 1;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.fetchSubscribers();
  }

  fetchSubscribers(){
    this.dataService.getSubscribers(this.pagination).subscribe((data:any )=>{
      this.subscribers = data.Data;
      this.allSubscribers = data.Count;
    })
  }

  renderPage(event: number) {
    this.pagination = event;
    this.fetchSubscribers();
  }
}
