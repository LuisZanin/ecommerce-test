import { Component } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'ec-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  url = 'http://localhost:3000/products';

  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  private getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  selectedProductId: string = "";

  selectProduct(product: any) {
    this.selectedProductId = product._id;
    console.log("teste ", this.selectedProductId);
  }
}