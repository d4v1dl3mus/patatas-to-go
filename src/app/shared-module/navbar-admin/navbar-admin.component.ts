import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss'],
})
export class NavbarAdminComponent {
  constructor(
    public authenticationService: AuthService,
    private router: Router
  ) {}
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/auth/login']);
  }
}
