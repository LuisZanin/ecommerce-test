import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCategory } from '../../product/enums/product.enum';
import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'ec-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  categories = Object.values(ProductCategory);

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');
      if (category) {
        this.filterProductsByCategory(category);
      }
    });
  }

  filterProductsByCategory(category: string): void {
    this.router.navigate([`/products/category/${category}`]);

    this.productService.getProductsByCategory(category).subscribe((products) => {
      this.productService.setProducts(products);
    });
  }

  onReloadProducts(): void {
    // Quando o usuário clicar para carregar todos os produtos
    this.router.navigate(['/']);

    // Carrega todos os produtos
    this.productService.getProducts().subscribe((products) => {
      this.productService.setProducts(products);
    });
  }
}
