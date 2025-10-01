import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./index/index.component').then(m => m.IndexComponent), // lista de clientes
  },
  {
    path: 'product-modal',
    loadComponent: () => import('./product-modal/product-modal.component').then(m => m.ProductModalComponent), // modal para crear cliente
  },
] as Routes;
