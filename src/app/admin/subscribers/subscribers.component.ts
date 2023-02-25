import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss'],
})
export class SubscribersComponent {

  subscribers: any = []

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.getSubscribers().subscribe((data:any )=>{
      this.subscribers = data.Data;
    })
  }
}
