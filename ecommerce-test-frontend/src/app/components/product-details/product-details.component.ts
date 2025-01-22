import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'ec-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnChanges {
  @Input() selectedProductId: string | null = null;  // Aqui vamos receber o ID do produto selecionado

  url = 'http://localhost:3000/products/';
  SelectedProduct: Product | null = null;

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['productId'] && this.selectedProductId) {
      this.getProductDetails(this.selectedProductId).subscribe(SelectedProduct => {
        this.SelectedProduct = SelectedProduct;
      });
    }
  }

  private getProductDetails(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}${id}`);
  }
}
