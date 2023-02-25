import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private dataService: DataService) {}

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    const formValue = this.loginForm.value;
    this.dataService.login(formValue.user, formValue.password).subscribe(
      (response) => {
        localStorage.setItem('Token', JSON.stringify(response.Token));
      },
      (error) => {
        console.error(error.error.error);
      }
    );
  }
}
