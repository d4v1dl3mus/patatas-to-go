import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  title = 'FormArray Example in Angular Reactive forms';
  codes: any = [];


  subscribersForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.subscribersForm = this.fb.group({
      subscribers: this.fb.array([]),
    });
  }

  get subscribers(): FormArray {
    return this.subscribersForm.get('subscribers') as FormArray;
  }

  ngOnInit() {
    this.getCodes();
  }

  newSkill(): FormGroup {
    return this.fb.group({
      Name: '',
      Email: '',
      CountryCode: '',
      PhoneNumber: '',
      JobTitle: '',
      Area: '',
      Topics: [[]],
    });
  }

  getCodes() {
    this.dataService.getCodes().subscribe((data: any) => {
      this.codes = data.Data;
    });
  }

  addsubscribers() {
    this.subscribers.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.subscribers.removeAt(i);
  }

  onSubmit() {
    const email = this.subscribersForm.get('Email');
    const countryCode = this.subscribersForm.get('CountryCode');
    const topics = this.subscribersForm.get('Topics');
    const formValue = this.subscribersForm.value;

    console.log(formValue)
    /* debugger */
    if (
      email?.value != '' ||
      (countryCode?.value != '' && this.subscribersForm.valid)
    ) {
      this.dataService.createSubscriber(formValue).subscribe(
        (response) => {
          this.router.navigate(['/admin/subscribers']);
        },
        (error) => {
          console.error(error.error.error);
        }
      );
    }
  }
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
