import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product/service/product.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'ec-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  
  @Input() showDeleteAndEditButtons: boolean = false;
  
  products: Product[] = [];
  
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.productService.products$.subscribe((products) => {
      this.products = products;
    });

    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  goToProductDetails(productId: string): void {
    this.router.navigate([`/product/details/${productId}`]);
  }

  editProduct(productId: string): void {
    this.router.navigate([`/product/edit/${productId}`]);
  }

  deleteProduct(productId: string): void {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
      this.productService.deleteProduct(productId).subscribe(() => {
        this.productService.getProducts().subscribe((products) => {
          this.products = products;
        });
        this.router.navigate([`/`]);
      });
    }
  }
}
