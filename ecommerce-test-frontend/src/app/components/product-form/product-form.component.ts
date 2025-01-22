import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../product/service/product.service';
import { ProductCategory } from '../../product/enums/product.enum';

@Component({
  selector: 'ec-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string | null = null;
  categories: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private productService: ProductService
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      imageUrl: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      productCategory: new FormControl('', [Validators.required]),
      isEnable: new FormControl(true)
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.categories = Object.values(ProductCategory);

    if (this.productId) {
      this.loadProductData(this.productId);
    }
  }

  loadProductData(productId: string): void {
    this.productService.getProductById(productId).subscribe(product => {
      this.productForm.patchValue({
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        description: product.description,
        productCategory: product.productCategory,
        isEnable: product.isEnable
      });
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;

      if (this.productId) {
        this.productService.updateProduct(this.productId, formValue).subscribe(() => {
          this.showNotification('Produto atualizado com sucesso!');
          this.router.navigate([`/product/${this.productId}`]);
        });
      } else {
        this.productService.createProduct(formValue).subscribe(() => {
          this.showNotification('Produto criado com sucesso!');
          this.router.navigate(['/']); 
        });
      }
    } else {
      console.log('Formulário inválido');
    }
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
}
