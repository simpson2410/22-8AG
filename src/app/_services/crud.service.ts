import { Injectable } from '@angular/core';
import { product } from './product';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // Node/Express API
  REST_API: string = 'http://localhost:8002/api/product';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }
  listProductbyCat()
  {
    return this.httpClient.get("http://localhost:8002/api/product/");
  }
  // Add
  Addproduct(data: product): Observable<any> {
    let API_URL = `${this.REST_API}/add-product`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Get all objects
  Getproducts() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get single object
  Getproduct(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/read-product/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  GetLoaiSP(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/loaiSP/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  // Update
  updateproduct(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-product/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete
  deleteproduct(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-product/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }


  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
