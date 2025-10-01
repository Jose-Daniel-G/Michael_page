import { Component, OnInit } from '@angular/core';
import { SharedComponent } from '../../shared/shared.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
declare var $: any;
declare function initPageEcommerce([]): any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedComponent, HeaderComponent, FooterComponent,TranslateModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  categories = [
    {
      name: 'rankingWatchCategory',
      products: [
        { id: 1, name: 'Apple Watch', price: 200, prevPrice: 300.45, rating: 5, reviews: 150, rank: 1, image: 'assets/images/apple-watch.png' },
        { id: 2, name: 'Kattie Smartwatch', price: 150, prevPrice: 200.45, rating: 5, reviews: 130, rank: 2, image: 'assets/images/watch2.png' },
        { id: 3, name: 'Cruz Smartwatch', price: 45, prevPrice: 55.45, rating: 5, reviews: 90, rank: 3, image: 'assets/images/watch3.png' }
      ]
    },
    {
      name: 'rankingMobileCategory',
      products: [
        { id: 1, name: 'Xiaomi Note 7', price: 45, prevPrice: 55.45, rating: 5, reviews: 150, rank: 1, image: 'assets/images/phone-1.png' },
        { id: 2, name: 'iPhone 11 max', price: 45, prevPrice: 55.45, rating: 5, reviews: 130, rank: 2, image: 'assets/images/phone-2.png' },
        { id: 3, name: 'Oppo poco f1', price: 45, prevPrice: 55.45, rating: 5, reviews: 90, rank: 3, image: 'assets/images/phone-3.png' }
      ]
    },
    {
      name: 'rankingLaptopCategory',
      products: [
        { id: 1, name: 'Dell inspire 14', price: 45, prevPrice: 55.45, rating: 5, reviews: 150, rank: 1, image: 'assets/images/laptop-1.png' },
        { id: 2, name: 'HP Omen 13', price: 45, prevPrice: 55.45, rating: 5, reviews: 130, rank: 2, image: 'assets/images/laptop-2.png' },
        { id: 3, name: 'HP Pavilion 15', price: 45, prevPrice: 55.45, rating: 5, reviews: 90, rank: 3, image: 'assets/images/laptop-3.png' }
      ]
    },
    {
      name: 'rankingHeadphonesCategory',
      products: [
        { id: 1, name: 'Bose Headphones', price: 45, prevPrice: 55.45, rating: 5, reviews: 150, rank: 1, image: 'assets/images/headphone-1.png' },
        { id: 2, name: 'COWIN E7 Active', price: 45, prevPrice: 55.45, rating: 5, reviews: 130, rank: 2, image: 'assets/images/headphone-2.png' },
        { id: 3, name: 'Beats Headphones', price: 45, prevPrice: 55.45, rating: 5, reviews: 90, rank: 3, image: 'assets/images/headphone-3.png' }
      ]
    }
  ];

  constructor(private router: Router) {}

  viewProduct(id: number) {
    this.router.navigate(['/product', id]);
  }

  ngOnInit(): void {
    setTimeout(()=>{
      initPageEcommerce($);
    },50);
  }
}
