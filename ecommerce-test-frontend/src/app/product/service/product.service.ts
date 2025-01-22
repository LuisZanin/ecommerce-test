import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(
      catchError((error) => {
        console.error('Erro ao criar o produto:', error);
        return throwError(() => new Error('Erro ao criar o produto'));
      })
    );
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/${id}`, product).pipe(
      catchError((error) => {
        console.error('Erro ao atualizar o produto:', error);
        return throwError(() => new Error('Erro ao atualizar o produto'));
      })
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erro ao buscar os produtos:', error);
        return throwError(() => new Error('Erro ao buscar os produtos'));
      })
    );
  }

  setProducts(products: Product[]): void {
    this.productsSubject.next(products);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`).pipe(
      catchError((error) => {
        console.error('Erro ao buscar os produtos por categoria:', error);
        return throwError(() => new Error('Erro ao buscar os produtos por categoria'));
      })
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Erro ao buscar o produto:', error);
        return throwError(() => new Error('Erro ao buscar o produto'));
      })
    );
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Erro ao excluir o produto:', error);
        return throwError(() => new Error('Erro ao excluir o produto'));
      })
    );
  }
}
