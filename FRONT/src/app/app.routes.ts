import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthRedirectGuard } from './core/guards/auth-redirect.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // 🔹 Asegura que inicie en login
  {
    path: 'landing',
    loadComponent: () => import('./modules/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'auth',
    loadComponent: () => import('./modules/auth-profile/auth-profile.component').then(c => c.AuthProfileComponent),
    loadChildren: () => import('./modules/auth-profile/auth-profile.route').then(m => m.default),
    canActivate: [AuthRedirectGuard]  // 🚀 Redirige si ya está autenticado

  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard],
        // data: { roles: ['admin'] }
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./modules/products/products.route').then((m) => m.default),
      },
      {
        path: 'permissions',
        loadChildren: () => import('./modules/permissions/permission.module').then(m => m.PermissionModule),
        canActivate: [AuthGuard],
        data: { roles: ['admin'] }
      },
      {
        path: 'roles',
        loadChildren: () => import('./modules/roles/roles.module').then(m => m.RolesModule),
        canActivate: [AuthGuard],
        data: { roles: ['admin'] }
      },
      {
        path: '**',
        redirectTo: 'error/404',
      }
    ]
  },
  { path: '**', redirectTo: 'auth/login' } // 🔹 Redirige cualquier otra URL inválida a login
]