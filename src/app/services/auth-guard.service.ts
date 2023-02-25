import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from "@angular/router";
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private auth: AuthService,
		private router: Router) { }
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean | Promise<boolean> {
		var isAuthenticated = this.auth.IsLoggedIn();
		if (this.auth.IsLoggedIn()) {
			return true
		}
		this.router.navigate(['/login']);
    return false;
	}
}
