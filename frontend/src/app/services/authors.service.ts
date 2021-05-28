import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const url = 'http://localhost:3000/authors/';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
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
