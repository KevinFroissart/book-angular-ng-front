import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Book {
  name;
  price;
  author;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<Book[]>('http://localhost:8080/api/books');
    }

  public updateBook(book) {
    return this.http.put<Book>("http://localhost:8080/api/books" + "/" + book.name, book);
  }

  public deleteBook(book) {
    return this.http.delete<Book>("http://localhost:8080/api/books" + "/"+ book.name);
  }

  public createBook(book) {
    return this.http.post<Book>("http://localhost:8080/api/books", book);
  }
}
