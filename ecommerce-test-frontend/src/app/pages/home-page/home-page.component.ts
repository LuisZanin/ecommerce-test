import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'ec-home-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavBarComponent, ProductListComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {

  showDeleteAndEditButtons: boolean = false;
  
}
