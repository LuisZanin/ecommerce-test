import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product/service/product.service';
import { Product } from '../../model/product.model';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'ec-product-detail-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css'],
})
export class ProductDetailsPageComponent implements OnInit {
  productId: string | null = null;
  product: Product | null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe((product) => {
        this.product = product;
      });
    }
  }
}
