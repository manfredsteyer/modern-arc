import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

export function checkAuth(): boolean | UrlTree {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isAuth()) {
    return router.createUrlTree(['/home', { login: true }]);
  }

  return true;
}
