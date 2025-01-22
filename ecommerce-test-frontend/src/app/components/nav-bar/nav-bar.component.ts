import { Component } from '@angular/core';
import { ProductCategory } from '../../product/enums/product.enum';

@Component({
  selector: 'ec-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  categories = Object.values(ProductCategory);
  
}
