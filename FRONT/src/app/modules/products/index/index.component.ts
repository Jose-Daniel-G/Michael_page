import { ProductModalComponent } from '../product-modal/product-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../product.service';
import { Product, Category } from '../product.interface';
import Swal from 'sweetalert2';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-index',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductModalComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @ViewChild('productModalComponent') productModalComponent!: ProductModalComponent;
  categories: Category[] = [];
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {

    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data.products;
        this.categories = data.categories;
        console.log('data Product:', data);

      },
      error: (err) => console.error(err)
    });
  }
  // crearProduct() {
  //   this.productModalComponent.productData = null; // No hay datos → crear
  //   this.productModalComponent.openModal('create');
  // }
  confirmDelete(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Deseas eliminar esta publicación?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteProduct(id);
      }
    });
  }

  deleteProduct(id: number): void {
    this.productsService.deleteProduct(id).subscribe({
      next: (res) => {
        this.products = this.products.filter(product => product.id !== id);
        Swal.fire('Eliminado!', res.message, 'success'); // <-- mensaje del backend
      },
      error: (err) => {
        console.error(err);
        Swal.fire('Error', err.error?.message || 'No se pudo eliminar el producto', 'error');
      }
    });
  }

}
