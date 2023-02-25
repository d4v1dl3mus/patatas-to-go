import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authervice: AuthService,
    private authenticationService: AuthService,
    private router: Router
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/admin']);
    }
  }

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {}

  login() {
    const formValue = this.loginForm.value;
    this.authervice.login(formValue.user, formValue.password).subscribe(
      (response) => {
        localStorage.setItem('Token', JSON.stringify(response.Token));
        this.router.navigate(['/admin']);

      },
      (error) => {
        console.error(error.error.error);
      }
    );
  }
}
