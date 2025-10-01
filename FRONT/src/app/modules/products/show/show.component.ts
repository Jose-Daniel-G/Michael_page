import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  product: any;
  products = [
    { id: 1, name: 'Apple Watch', price: 200, prevPrice: 300.45, description: 'El mejor reloj inteligente.', image: 'assets/images/apple-watch.png' },
    { id: 2, name: 'Callie Smartwatch', price: 150, prevPrice: 200.45, description: 'Cómodo y elegante.', image: 'assets/images/watch2.png' },
    { id: 3, name: 'Cruz Smartwatch', price: 45, prevPrice: 55.45, description: 'Perfecto para principiantes.', image: 'assets/images/watch3.png' }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id);
  }

  goBack() {
    history.back();
  }
}
