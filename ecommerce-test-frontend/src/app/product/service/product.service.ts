import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../../model/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';  // Importar o MatSnackBar

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(
      catchError((error) => {
        this.handleError(error); 
        return throwError(() => new Error('Erro ao criar o produto'));
      })
    );
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product).pipe(
      catchError((error) => {
        this.handleError(error);
        return throwError(() => new Error('Erro ao atualizar o produto'));
      })
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError((error) => {
        this.handleError(error);
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
        this.handleError(error);
        return throwError(() => new Error('Erro ao buscar os produtos por categoria'));
      })
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        this.handleError(error);
        return throwError(() => new Error('Erro ao buscar o produto'));
      })
    );
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        this.handleError(error);
        return throwError(() => new Error('Erro ao excluir o produto'));
      })
    );
  }

  private handleError(error: any): void {
    console.error('Erro:', error);

    const errorMessage = error?.error?.message || error?.message || 'Algo deu errado. Tente novamente mais tarde.';

    this.snackBar.open(errorMessage, 'Fechar', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
