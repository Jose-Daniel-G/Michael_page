import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthRedirectGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    // ✅ Si está logueado, lo mandamos al dashboard
    router.navigate(['/dashboard']);
    return false; // bloquea que cargue /login
  }

  return true; // permite ir a /login si NO está logueado
};
