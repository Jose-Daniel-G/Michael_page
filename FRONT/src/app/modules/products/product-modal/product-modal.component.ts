import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';
import { Product } from '../product.interface';
import { ProductsService } from '../product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})


export class ProductModalComponent implements OnInit {
  productForm!: FormGroup; private modalInstance!: Modal;
  @ViewChild('productModal') modalElement!: ElementRef;
  @Input() categories: { id: number, name: string }[] = [];
  @Input() productData: Product | null = null; // Datos para editar 
  @Output() refreshList = new EventEmitter<void>();
  modo: 'create' | 'edit' = 'create';
  // imgPreview: string = 'assets/images/portada_noticia.png'; // Imagen por defecto

  constructor(private fb: FormBuilder, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      // foto: [null],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      category_id: ['', Validators.required]
    });
  }
  ngAfterViewInit(): void {
    this.modalInstance = new Modal(this.modalElement.nativeElement);

  }
  openModal(modo: 'create' | 'edit', product?: Product) {
    this.modo = modo;
    if (modo === 'edit' && product) {
      this.productData = product;
      this.productForm.patchValue({
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        category_id: product.category_id || '' // Usar el nombre del control 'category'
      });
      // Si tienes URL de foto, actualizar imgPreview
      // this.imgPreview = Product.foto || 'assets/images/portada_noticia.png';
    } else {
      this.productData = null;
      this.productForm.reset();
      // this.imgPreview = 'assets/images/portada_noticia.png';
    }
    this.modalInstance.show();
  }

  closeModal(): void { this.modalInstance.hide(); }

  // onFileChange(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     const file = input.files[0];
  //     this.productForm.patchValue({ foto: file });

  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imgPreview = reader.result as string;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }
  submit(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched(); // Solo marca errores
      return;
    }

    if (this.modo === 'create') {
      // Crear producto
      this.productsService.createProduct(this.productForm.value).subscribe({
        next: (res) => {
          Swal.fire('Producto creado correctamente', 'success');
                    this.refreshList.emit();
          this.closeModal();
        },
        error: err => {
          console.error('Error desde Laravel:', err);
        }
      });
    } else if (this.modo === 'edit' && this.productData) {
      // Editar producto
      this.productsService.updateProduct(this.productData.id, this.productForm.value).subscribe({
        next: res => {
          console.log('Actualizado en Laravel:', res);
          Swal.fire('Producto actualizado correctamente', 'success');
                    this.refreshList.emit();
          this.closeModal();
        },
        error: err => {
          console.error('Error desde Laravel:', err);
        }
      });
    }
  }

}