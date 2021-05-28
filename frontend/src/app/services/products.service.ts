import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Book } from '../Books';
import { catchError, map } from 'rxjs/operators';

const url = 'http://localhost:3000/products/';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(public http: HttpClient) {}

  getAll() {
    return this.http.get(url);
  }

  getById(id: any) {
    return this.http.get(`${url}${id}`);
  }

  create(data: any) {
    return this.http.post(`${url}`, data);
  }

  update(data: any, id: any) {
    return this.http.put(`${url}${id}`, data);
  }

  delete(id: any) {
    console.log(`${url}${id}`);
    return this.http.delete(`${url}${id}`);
  }
}
