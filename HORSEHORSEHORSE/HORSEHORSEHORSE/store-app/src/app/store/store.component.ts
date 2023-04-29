import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  public products = [
    {
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      imageUrl: 'https://via.placeholder.com/300x200',
      price: '30€',
      rate : '4,5 star'
    },
    {
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      imageUrl: 'https://via.placeholder.com/300x200',
      price: '30€',
      rate : '4,5 star'
    },
    {
      name: 'Product 3',
      description: 'This is the description for Product 3.',
      imageUrl: 'https://via.placeholder.com/300x200',
      price: '30€',
      rate : '4,5 star'
    },
    {
      name: 'Product 4',
      description: 'This is the description for Product 4.',
      imageUrl: 'https://via.placeholder.com/300x200',
      price: '30€',
      rate : '4,5 star'
    },
    {
      name: 'Product 5',
      description: 'This is the description for Product 5.',
      imageUrl: 'https://via.placeholder.com/300x200',
      price: '30€',
      rate : '4,5 star'
    }
  ];



  public filteredProducts = [...this.products];
  public searchTerm = '';

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      return product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

}

