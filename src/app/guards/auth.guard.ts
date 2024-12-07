import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service'; // Asegúrate de usar AuthserviceService

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthserviceService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userRole = localStorage.getItem('user.role');
    if (userRole) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
