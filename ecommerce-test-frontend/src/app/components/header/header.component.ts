import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ec-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  enableButtons: boolean = false;

  @Input() showConfigButton: boolean = false;

  @Output() configButtonClicked = new EventEmitter<boolean>();
  @Output() reloadProducts = new EventEmitter<void>();

  constructor(private router: Router) {}

  EnableConfigurations(): void {
    if (!this.enableButtons){
      this.configButtonClicked.emit(true);
      this.enableButtons = true
    } else {
      this.configButtonClicked.emit(false);
      this.enableButtons = false
    }
  }

  goToHome(): void {
    this.router.navigate(['/']);  
    this.reloadProducts.emit(); 
  }

  goToAddProduct(): void {
    this.router.navigate([`/product/new/`]);
  }
}
