import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Subscriber } from '../../shared/models/subscriber.model';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss'],
})
export class SubscriberComponent {
  public subscriber: any = [];
  id: any = 0;
  codes:any = [];

  constructor(
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.id = this.router.url.split('/')[3];
    this.fetchSubscriber();
    this.getCodes();
  }
  subscriberForm = this.fb.group({
    Name: ['', Validators.required],
    Email: [''],
    CountryCode: [''],
    PhoneNumber: [''],
    JobTitle: [''],
    Area: [''],
    Topics: [''],
  });

  fetchSubscriber() {
    this.dataService.getSubscriber(this.id).subscribe((data: any) => {
      this.subscriber = data;
      if (this.subscriber) {
        this.subscriberForm?.patchValue(this.subscriber);
      }
    });
  }

  onSubmit() {
    const email = this.subscriberForm.get('Email');
    const countryCode = this.subscriberForm.get('CountryCode');
    const formValue = this.subscriberForm.value;
    if (
      email?.value != '' ||
      (countryCode?.value != '' && this.subscriberForm.valid)
    ) {
      this.dataService.updateSubscriber(formValue, this.id).subscribe(
        (response) => {
          this.router.navigate(['/admin/subscribers']);
        },
        (error) => {
          console.error(error.error.error);
        }
      );
    }
  }

  getCodes(){
    this.dataService.getCodes().subscribe((data: any) => {
      this.codes = data.Data;

    });
  }

  changeCountryCode(){

  }
}
