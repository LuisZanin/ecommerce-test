import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from '../../product/enums/product.enum';
import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'ec-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  categories = Object.values(ProductCategory);

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  filterProductsByCategory(category: string): void {
    this.router.navigate([`/products/category/${category}`]);

    this.productService.getProductsByCategory(category).subscribe((products) => {
      this.productService.setProducts(products);
    });
  }

  onReloadProducts(): void {
    this.router.navigate(['/']);

    this.productService.getProducts().subscribe((products) => {
      this.productService.setProducts(products);
    });
  }
}
