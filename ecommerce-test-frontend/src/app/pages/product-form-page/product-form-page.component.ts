import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductFormComponent } from '../../components/product-form/product-form.component';

@Component({
  selector: 'app-product-form-page',
  imports: [HeaderComponent, ProductFormComponent],
  templateUrl: './product-form-page.component.html',
  styleUrl: './product-form-page.component.css'
})
export class ProductFormPageComponent {

}
