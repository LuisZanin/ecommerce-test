import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailsPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent }, 
  { path: 'product/details/:id', component: ProductDetailsPageComponent },
  { path: 'product/edit/:id', component: ProductFormPageComponent },
  { path: 'product/new', component: ProductFormPageComponent },
  { path: 'products/category/:category', component: HomePageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
